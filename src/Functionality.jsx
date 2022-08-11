import React, { useState, useEffect } from "react";

import { cityData } from "./city";

const Functionality = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityData, setSelectedCityData] = useState("");

  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [cityDataList, setCityDataList] = useState([]);

  useEffect(() => {
    console.log("Country List", cityData);
    const countries = Object.keys(cityData);
    setCountryList(countries);
    console.log("Country List", countryList);
  }, []);

  useEffect(() => {
    // console.log("City List", cityList);
    const cities = cityData[selectedCountry];
    // setCityList(cities);
  }, [cityList]);

  return (
    <div>
      <h1>This is the Component that contains all the logic required to solve this task.</h1>

      <hr />
      <h1>Current Selected Country : {selectedCountry}</h1>
      <select
        style={{ fontSize: "15px", width: "200px" }}
        value={selectedCountry}
        onChange={(e) => {
          //   console.log("City List", cityData[e.target.value]);
          setSelectedCountry(e.target.value);
          let cities = [];
          let cityListLocal = cityData[e.target.value];
          //   console.log("City List", cities.cities);
          for (let i = 0; i < cityListLocal.cities.length; i++) {
            // console.log(
            //   `City List ${i + 1} ==>`,
            //   Object.keys(cities.cities[i])[0]
            // );
            cities.push(Object.keys(cityListLocal.cities[i])[0]);
          }
          console.log(`City List ==>`, cities);
          // Set the city list
          setCityList(cities);
        }}
        className="form-control"
      >
        {countryList.map((country, key) => {
          return (
            <option key={key} value={country}>
              {country}
            </option>
          );
        })}
      </select>

      <hr />
      <h1>Current Selected City : {selectedCity}</h1>
      <select
        style={{ fontSize: "15px", width: "200px" }}
        value={selectedCity}
        onChange={(e) => {
          setSelectedCity(e.target.value);

          let currentI;
          for (let i = 0; i < cityList.length; i++) {
            if (cityList[i] === e.target.value) {
              currentI = i;
            }
            // console.log(`City List ---> ${i + 1} ==>`, cityList[i]);
          }
          console.log(`Current I ==>`, currentI);

          let cityDataLocalKeys = Object.values(
            Object.values(cityData[selectedCountry].cities)
          );
          let cityDataLocal = cityData[selectedCountry].cities;
          let subCityArrayTaste = [];
          console.log("City Data Local Keys", cityDataLocalKeys);

          let subCityTasteKey = Object.values(
            Object.keys(Object.values(cityDataLocal[0])[0])
          );

          for (let i = 0; i < cityDataLocal.length; i++) {
            let subCityTaste = Object.values(
              Object.values(Object.values(cityDataLocal[i])[0])
            )[i];
            subCityArrayTaste.push({
              type: subCityTasteKey[i],
              value: subCityTaste,
            });
            console.log(
              `City Data Local Sub subCityTaste ${i + 1} ==>`,
              subCityTaste
            );
          }
          //   console.log("City Data Local", cityDataLocal);
          setCityDataList(subCityArrayTaste);
        }}
        className="form-control"
      >
        {cityList.map((city, key) => {
          return (
            <option key={key} value={city}>
              {city}
            </option>
          );
        })}
      </select>

      <hr />

      <h1>Current Selected Taste : {selectedCityData}</h1>
      <select
        style={{ fontSize: "15px", width: "200px" }}
        value={selectedCityData}
        onChange={(e) => {
          setSelectedCityData(e.target.value);
        }}
        className="form-control"
      >
        {cityDataList.map((cityData, key) => {
          return (
            <option key={key} value={cityData.value}>
              {cityData.type}
            </option>
          );
        })}
      </select>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Functionality;
