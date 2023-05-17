import React, { useState } from "react";
import BicycleGrid from "../bike-grid";

const CitySelectionPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const cityList = ["Amsterdam", "Utrecht", "Haarlem"];

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <>
      <h1>City Selection</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {cityList.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>
      {selectedCity && <BicycleGrid />}
    </>
  );
};

export default CitySelectionPage;
