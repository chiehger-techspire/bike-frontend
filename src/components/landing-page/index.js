import React, { useState } from 'react';

const CitySelectionPage = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <h1>City Selection</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Haarlem">Haarlem</option>
          <option value="Utrecht">Utrecht</option>
        </select>
      </div>
    </div>
  );
};

export default CitySelectionPage;
