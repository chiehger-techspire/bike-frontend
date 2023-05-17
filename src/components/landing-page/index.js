import React, { useState } from "react";
import BicycleGrid from "../bike-grid";

const CitySelectionPage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const cityList = ["Amsterdam", "Utrecht", "Haarlem"];

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <h2>City Selection</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select className="form-control col-lg-3" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {cityList.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>
      {selectedCity && <BicycleGrid />}
    </div>
  );
};

export default CitySelectionPage;
