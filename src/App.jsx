import { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import RegionSelector from './components/RegionSelector';

function App() {
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

  return (
    <>
      <header className="text-center justify-content-center text-light p-4">
        <h1>Countrix</h1>
        <RegionSelector onChange={setRegion} />
      </header>

      <div className="row gap-4 text-center justify-content-center">
        {countries.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </>
  );
}
export default App;
