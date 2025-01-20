import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CountryDetails() {
  const { name } = useParams(); // Récupère le nom du pays depuis l'URL
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0])); // On prend le premier élément du tableau
  }, [name]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <button onClick={ () => navigate('/') } className='btn btn-primary 
      ms-4 mb-4'>
        Retour à l'accueil
      </button>

      <div className='card p-4 m-4 shadow-sm border-0'>
        <div className='row'>
          {/* Colonne gauche pour le drapeau */}
          <div className='col-md-4 d-flex justify-content-center align-items-center'>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </div>

          {/* Colonne droite pour les informations */}
          <div className='col-md-8'>
            <h2>{country.name.common}</h2>
            <p>
              <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Languages:</strong>{' '}
              {Object.values(country.languages || {}).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
