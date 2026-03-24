import { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import CountryCard from './components/CountryCard';
import RegionSelector from './components/RegionSelector';
import Footer from './components/Footer';
import CountryDetails from './pages/CountryDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // REST Countries limite le parametre `fields` sur /all (~10 champs max).
    // Trop de champs = 400 Bad Request => liste vide.
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,cca2,flags,capital,population,region,subregion,continents,languages,flag'
    )
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const msg =
            typeof data?.message === 'string'
              ? data.message
              : `Erreur API (${response.status})`;
          throw new Error(msg);
        }
        return data;
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Le format des donnees recues est invalide.');
        }
        setCountries(data);
      })
      .catch((fetchError) => {
        setCountries([]);
        setError(fetchError.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredCountries = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return countries.filter((country) => {
      const regionMatch =
        region === 'all' ||
        country.region?.toLowerCase() === region ||
        country.continents?.some((continent) => continent.toLowerCase() === region);

      if (!regionMatch) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const searchableContent = [
        country.name?.common,
        country.name?.official,
        country.capital?.join(' '),
        country.region,
        country.subregion,
        country.continents?.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableContent.includes(normalizedSearch);
    });
  }, [countries, region, searchTerm]);

  const location = useLocation();

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur-md'>
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
          <Link to='/' className='group inline-flex items-center gap-3'>
            <div className='rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 p-2 shadow-lg shadow-sky-500/20'>
              <span className='text-lg'>🌍</span>
            </div>
            <h1 className='text-2xl font-bold tracking-tight text-white transition group-hover:text-sky-300'>
              Countrix
            </h1>
          </Link>
          <p className='hidden text-sm text-slate-300 md:block'>
            Explorez les pays, leurs régions et leurs données essentielles.
          </p>
        </div>
      </header>

      <main className='mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8'>
        {location.pathname === '/' && (
          <>
            <div className='mb-3'>
              <h2 className='text-xl font-semibold text-white sm:text-2xl'>
                Explorer tous les continents
              </h2>
              <p className='mt-1 text-sm text-slate-300'>
                Filtre par continent/region, puis recherche un pays par nom,
                capitale ou zone geographique.
              </p>
            </div>
            <div className='mb-8 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-slate-900/30 backdrop-blur sm:p-6'>
              <RegionSelector
                onChange={setRegion}
                selectedRegion={region}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
          </>
        )}

        <Routes>
          <Route
            path='/'
            element={
              <>
                {error ? (
                  <div className='rounded-2xl border border-rose-400/40 bg-rose-500/10 p-6 text-center'>
                    <p className='text-rose-100'>{error}</p>
                  </div>
                ) : null}

                {isLoading ? (
                  <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className='animate-pulse rounded-2xl border border-white/10 bg-slate-900/70 p-5'
                      >
                        <div className='mb-4 h-10 w-16 rounded bg-slate-700/70' />
                        <div className='mb-2 h-5 w-2/3 rounded bg-slate-700/70' />
                        <div className='mb-2 h-4 w-1/2 rounded bg-slate-700/60' />
                        <div className='h-4 w-1/3 rounded bg-slate-700/60' />
                      </div>
                    ))}
                  </div>
                ) : null}

                {!isLoading && !error && filteredCountries.length === 0 ? (
                  <div className='rounded-2xl border border-white/10 bg-white/5 p-6 text-center'>
                    <p className='text-slate-200'>
                      Aucun pays ne correspond a tes filtres.
                    </p>
                  </div>
                ) : null}

                {!isLoading && !error && filteredCountries.length > 0 ? (
                  <div className='mb-4 flex items-center justify-between'>
                    <p className='text-sm text-slate-300'>
                      {filteredCountries.length} pays affiches
                    </p>
                    <p className='rounded-full border border-sky-300/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200'>
                      {region === 'all' ? 'tous' : region}
                    </p>
                  </div>
                ) : null}

                {!isLoading && !error ? (
                  <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
                    {filteredCountries.map((country, index) => (
                      <CountryCard
                        key={country.cca2 || `${country.name?.common}-${index}`}
                        country={country}
                      />
                    ))}
                  </div>
                ) : null}
              </>
            }
          />
          <Route path='/country/:name' element={<CountryDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
