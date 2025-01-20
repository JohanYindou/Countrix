import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <div className='card col-md-4 shadow-sm border-0'>
      <Link
        to={`/country/${country.name.common}`}
        style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
          className='card-image'
          style={{
            backgroundImage: `url(${
              country.flags['svg']
                ? country.flags['svg']
                : 'https://via.placeholder.com/150'
            })`,
          }}></div>
        <div className='card-body'>
          <h5 className='card-title'>
            {country.name.common} {country.flag ? country.flag : ''}
          </h5>
          <p className='card-text'>
            Capitale: {country.capital ? country.capital : 'N/A'}
          </p>
          <p className='card-text'>
            Population: {country.population.toLocaleString('fr-FR')}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CountryCard;
