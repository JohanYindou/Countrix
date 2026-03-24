import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      <div className='mx-auto max-w-xl rounded-2xl border border-rose-400/40 bg-rose-500/10 p-6 text-center shadow-lg shadow-rose-900/20'>
        <h2 className='text-2xl font-semibold text-rose-200'>Erreur : {error}</h2>
        <button
          onClick={() => navigate('/')}
          className='mt-4 rounded-xl bg-rose-500 px-4 py-2 font-medium text-white transition hover:bg-rose-400'
        >
          Retour a l&apos;accueil
        </button>
      </div>
    );
  }

  if (!country) {
    return (
      <div className='flex min-h-[50vh] items-center justify-center'>
        <div className='flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200'>
          <span className='h-5 w-5 animate-spin rounded-full border-2 border-sky-300 border-t-transparent' />
          <span>Chargement des informations...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <button
        onClick={() => navigate('/')}
        className='rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400/60 hover:text-sky-200'
      >
        Retour a l&apos;accueil
      </button>

      <article className='rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-slate-900/30 md:p-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-12'>
          <div className='md:col-span-4'>
            <img
              src={country.flags.svg}
              alt={`Drapeau de ${country.name.common}`}
              className='h-auto w-full rounded-xl object-cover ring-1 ring-white/20'
            />
          </div>

          <div className='space-y-3 md:col-span-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white'>
              {country.name.common} {country.flag || ''}
            </h2>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Nom officiel :</span>{' '}
              {country.name.official || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Capitale :</span>{' '}
              {country.capital?.[0] || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Region :</span>{' '}
              {country.region}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Sous-region :</span>{' '}
              {country.subregion || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Population :</span>{' '}
              {country.population.toLocaleString('fr-FR')}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Langues :</span>{' '}
              {Object.values(country.languages || {}).join(', ')}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Continent(s) :</span>{' '}
              {country.continents?.join(', ') || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Superficie :</span>{' '}
              {country.area ? `${country.area.toLocaleString('fr-FR')} km²` : 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Fuseaux horaires :</span>{' '}
              {country.timezones?.join(', ') || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Devises :</span>{' '}
              {currencyLabel || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Codes pays :</span>{' '}
              {country.cca2 || 'N/A'} / {country.cca3 || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Domaine internet :</span>{' '}
              {country.tld?.join(', ') || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Membre ONU :</span>{' '}
              {country.unMember ? 'Oui' : 'Non'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Independant :</span>{' '}
              {country.independent ? 'Oui' : 'Non'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Debut de semaine :</span>{' '}
              {country.startOfWeek || 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Conduite :</span>{' '}
              {country.car?.side ? `volant a ${country.car.side}` : 'N/A'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Frontieres :</span>{' '}
              {country.borders?.join(', ') || 'Aucune'}
            </p>
            <p className='text-slate-300'>
              <span className='font-semibold text-slate-100'>Coordonnees capitale :</span>{' '}
              {country.capitalInfo?.latlng
                ? `${country.capitalInfo.latlng[0]}, ${country.capitalInfo.latlng[1]}`
                : 'N/A'}
            </p>
            <div className='flex flex-wrap gap-3 pt-2'>
              {country.maps?.googleMaps ? (
                <a
                  href={country.maps.googleMaps}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-lg border border-sky-300/30 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/20'
                >
                  Ouvrir Google Maps
                </a>
              ) : null}
              {country.maps?.openStreetMaps ? (
                <a
                  href={country.maps.openStreetMaps}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10'
                >
                  Ouvrir OpenStreetMap
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CountryDetails;
