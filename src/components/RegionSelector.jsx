import PropTypes from 'prop-types';

function RegionSelector({
  onChange,
  selectedRegion,
  searchTerm,
  onSearchChange,
}) {
  const regions = [
    { value: 'all', label: 'Tous les continents' },
    { value: 'europe', label: 'Europe' },
    { value: 'africa', label: 'Afrique' },
    { value: 'americas', label: 'Ameriques' },
    { value: 'asia', label: 'Asie' },
    { value: 'oceania', label: 'Oceanie' },
  ];

  return (
    <div className='flex w-full flex-wrap items-center gap-x-3 gap-y-2'>
      <p className='sr-only'>Filtrer par continent</p>
      <div
        className='flex max-w-full flex-1 flex-wrap items-center gap-2'
        role='group'
        aria-label='Continents'
      >
        {regions.map((region) => (
          <button
            key={region.value}
            type='button'
            onClick={() => onChange(region.value)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
              selectedRegion === region.value
                ? 'border-sky-300/50 bg-sky-500/20 text-sky-100'
                : 'border-white/15 bg-white/5 text-slate-300 hover:border-sky-300/30 hover:text-sky-100'
            }`}
          >
            {region.label}
          </button>
        ))}
      </div>

      <div className='flex min-w-[min(100%,18rem)] flex-1 items-center gap-2 sm:min-w-[14rem] sm:flex-initial sm:basis-80 lg:basis-96'>
        <label
          htmlFor='country-search'
          className='hidden shrink-0 text-sm font-semibold text-slate-200 sm:block'
        >
          Rechercher
        </label>
        <input
          id='country-search'
          type='search'
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder='Pays, capitale, region…'
          aria-label='Rechercher un pays'
          className='min-w-0 flex-1 rounded-xl border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30'
        />
      </div>
    </div>
  );
}

export default RegionSelector;

RegionSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
