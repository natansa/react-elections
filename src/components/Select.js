import React from 'react';

export default function Select({ cities, onSelectCity }) {
  return (
    <select onChange={(e) => onSelectCity(e.target.value)}>
      <option value="">Select a city</option>
      {cities.map((city) => (
        <option key={city.id} value={city.id}>
          {city.name}
        </option>
      ))}
    </select>
  );
}
