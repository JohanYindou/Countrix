import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null); // Pour gérer les erreurs
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pays non trouvé');
        }
        return response.json();
      })
      .then((data) => setCountry(data[0]))
      .catch((error) => setError(error.message)); // Capturer l'erreur si elle se produit
  }, [name]);

  if (error) {
    return (
      <div className='text-center'>
        <h2>Erreur : {error}</h2>
        <button onClick={() => navigate('/')} className='btn btn-primary'>
          Retour à l'accueil
        </button>
      </div>
    );
  }

  if (!country) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className='btn btn-primary ms-4 mb-4'>
        Retour à l'accueil
      </button>

      <div className='card p-4 m-4 shadow-sm border-0'>
        <div className='row'>
          {/* Colonne gauche pour le drapeau */}
          <div className='col-md-4 col-12 d-flex justify-content-center align-items-center'>
            <img
              src={country.flags.svg}
              alt={`Drapeau de ${country.name.common}`}
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </div>

          {/* Colonne droite pour les informations */}
          <div className='col-md-8'>
            <h2>{country.name.common}</h2>
            <p>
              <strong>Capitale:</strong> {country.capital?.[0] || 'N/A'}
            </p>
            <p>
              <strong>Région:</strong> {country.region}
            </p>
            <p>
              <strong>Sous-région:</strong> {country.subregion}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Langues:</strong>{' '}
              {Object.values(country.languages || {}).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
