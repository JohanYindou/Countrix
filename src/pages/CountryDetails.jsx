import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBorderCountries } from './countryService';

function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setCountry(null);

    // Pas de `fields` ici : le filtre est strict sur plusieurs endpoints
    // et on veut tout l'objet pays pour la fiche detail.
    fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pays non trouvé');
        }
        return response.json();
      })
      .then((data) => {
        const exactMatch = data.find(
          (item) => item.name?.common?.toLowerCase() === name.toLowerCase()
        );
        setCountry(exactMatch || data[0]);
      })
      .catch((fetchError) => setError(fetchError.message));
  }, [name]);

  useEffect(() => {
    if (!country?.borders) return;

    fetchBorderCountries(country.borders)
      .then(setBorderCountries)
      .catch(() => setBorderCountries([]));
  }, [country]);

  const currencyLabel = country
    ? Object.values(country.currencies || {})
        .map((currency) =>
          currency?.name && currency?.symbol
            ? `${currency.name} (${currency.symbol})`
            : currency?.name || ''
        )
        .filter(Boolean)
        .join(', ')
    : 'N/A';

    if (error) {
      return (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="bg-rose-500/10 border border-rose-400/40 text-rose-200 px-6 py-4 rounded-2xl shadow-lg">
            {error}
          </div>
        </div>
      );
    }
  
    if (!country) {
      return (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="flex items-center gap-3 text-slate-200">
            <span className="w-5 h-5 border-2 border-sky-300 border-t-transparent rounded-full animate-spin"></span>
            Chargement...
          </div>
        </div>
      );
    }

  return (
    <div className='max-w-6xl mx-auto px-4 py-8 space-y-8 text-white'>
      <button
        onClick={() => navigate('/')}
        className='px-4 py-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition'
      >
        ← Retour a l&apos;accueil
      </button>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 shadow-2xl border border-white/10 space-y-8">
  {/* HEADER */}
  <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={country.flags.svg}
            alt="flag"
            className="w-40 rounded-xl shadow-lg ring-1 ring-white/20"
          />

          <div>
            <h1 className="text-4xl font-bold">
              {country.name.common} {country.flag}
            </h1>
            <p className="text-slate-400">
              {country.region} • {country.subregion}
            </p>
          </div>
        </div>
  {/* GRID */}
  <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
            <h2 className="text-sky-300 font-semibold">Infos principales</h2>
            <p><span className="font-medium">Capitale :</span> {country.capital?.[0]}</p>
            <p><span className="font-medium">Population :</span> {country.population.toLocaleString('fr-FR')}</p>
            <p><span className="font-medium">Superficie :</span> {country.area?.toLocaleString('fr-FR')} km²</p>
            <p><span className="font-medium">Devises :</span> {currencyLabel}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <h2 className="text-purple-300 font-semibold">Infos complémentaires</h2>

            <div>
              <p className="font-medium mb-1">Langues :</p>
              <div className="flex flex-wrap gap-2">
                {Object.values(country.languages || {}).map((lang) => (
                  <span
                    key={lang}
                    className="text-xs px-2 py-1 rounded-md bg-sky-500/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <p><span className="font-medium">Fuseaux :</span> {country.timezones?.join(', ')}</p>
            <p><span className="font-medium">Conduite :</span> {country.car?.side}</p>
          </div>
        </div>

  {/* MAP */}
  {country.capitalInfo?.latlng && (
          <div>
            <h3 className="text-sm text-slate-400 mb-2">Localisation</h3>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="map"
                className="w-full h-[300px] border-0"
                loading="lazy"
                src={`https://www.google.com/maps?q=${country.capitalInfo.latlng[0]},${country.capitalInfo.latlng[1]}&z=5&output=embed`}
              />
            </div>
          </div>
        )}

        {/* BORDERS */}
        {borderCountries.length > 0 && (
          <div>
            <h3 className="text-sm text-slate-400 mb-2">Pays frontaliers</h3>
            <div className="flex flex-wrap gap-2">
              {borderCountries.map((b) => (
                <button
                  key={b.cca3}
                  onClick={() => navigate(`/country/${b.name.common}`)}
                  className="px-3 py-1 rounded-full bg-white/10 text-xs hover:bg-sky-500/30 hover:scale-105 transition"
                >
                  {b.name.common}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;