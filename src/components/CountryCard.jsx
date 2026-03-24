import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.name.common}`}
      className='group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-100 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-sky-900/30'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-10'
        style={{
          backgroundImage: `url(${
            country.flags.svg
              ? country.flags.svg
              : 'https://via.placeholder.com/150'
          })`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className='relative z-10'>
        <div className='mb-3 flex items-center gap-3'>
          <img
            src={country.flags.png || country.flags.svg}
            alt={`Drapeau de ${country.name.common}`}
            className='h-10 w-16 rounded object-cover ring-1 ring-white/20'
          />
          <h2 className='text-lg font-semibold text-white'>
            {country.name.common} {country.flag || ''}
          </h2>
        </div>
        <p className='text-sm text-slate-300'>
          <span className='font-medium text-slate-200'>Capitale :</span>{' '}
          {country.capital ? country.capital[0] : 'N/A'}
        </p>
        <p className='mt-1 text-sm text-slate-300'>
          <span className='font-medium text-slate-200'>Population :</span>{' '}
          {country.population.toLocaleString('fr-FR')}
        </p>
        <p className='mt-1 text-sm text-slate-300'>
          <span className='font-medium text-slate-200'>Region :</span>{' '}
          {country.region || 'N/A'}
          {country.subregion ? ` - ${country.subregion}` : ''}
        </p>
        <p className='mt-1 text-sm text-slate-300'>
          <span className='font-medium text-slate-200'>Continent :</span>{' '}
          {country.continents?.join(', ') || 'N/A'}
        </p>
        <p className='mt-4 text-sm font-medium text-sky-300 transition group-hover:text-sky-200'>
          Voir les details {'->'}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    flag: PropTypes.string,
    capital: PropTypes.arrayOf(PropTypes.string),
    population: PropTypes.number.isRequired,
    region: PropTypes.string,
    subregion: PropTypes.string,
    continents: PropTypes.arrayOf(PropTypes.string),
    flags: PropTypes.shape({
      png: PropTypes.string,
      svg: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
