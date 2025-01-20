import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Importation des routes

import CountryCard from './components/CountryCard';
import RegionSelector from './components/RegionSelector';
import Footer from './components/Footer'; // Import du Footer
import CountryDetails from './pages/CountryDetails';
import About from './pages/About'; // Import des pages
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App () {
  // Liste des pays
  /**
   *  On défini un constant React avec un tableau à la place initial du nom
   *  de la variable comme ceci [countries, setCountries]
   *  - La première valeur du tableau est  la variable
   *  - La seconde valeur est le "setter" qui permet de modifier la variable
   *  Par la suite, on met en place l'état initial de la variable avec useState()
   *  Au passage useState() est ce qu'on appelle un "hook" dans React
   */

  const [countries, setCountries] = useState([]);

  // Région sélectionée

  const [region, setRegion] = useState('Europe');


  // API restcountries

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`) // Va chercher les données de l'API
      .then((response) => response.json()) // Converti les donnés en JSON
      .then((data) => setCountries(data)); //.then((data) => console.log(data));
  }, [region]);


  const location = useLocation();

  return (
    <>
      <header className='text-center justify-content-center text-light p-4'>
        <h1>Countrix</h1>
      </header>
      {/* Afficher le header uniquement sur la route "/" */}
      {location.pathname === '/' && (
        <div className='text-center justify-content-center text-light p-4'>
          <RegionSelector onChange={setRegion} />
        </div>
      )}

      <Routes>
        {/* Route principale avec la liste des pays */}
        <Route
          path='/'
          element={
            <div className='row gap-4 text-center justify-content-center'>
              {countries.map((country) => (
                <CountryCard key={country.cca2} country={country} />
              ))}
            </div>
          }
        />
        {/* Route pour les détails d'un pays */}
        <Route path='/country/:name' element={<CountryDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
