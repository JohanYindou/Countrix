import React from 'react';

function RegionSelector({ onChange }) {
  const regions = [
    { value: 'europe', label: 'Europe' },
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'Americas' },
    { value: 'asia', label: 'Asia' },
    { value: 'oceania', label: 'Oceania' },
  ];

  return (
    <div className="regions">
      <select onChange={(e) => onChange(e.target.value)}>
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RegionSelector;
