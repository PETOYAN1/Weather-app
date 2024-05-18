import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: "90cfd9f4c08a456534c52a7f1eaefa5b",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPassed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`).
    then((res) => res.json()).
    then((result) => {
      console.log(result);
      setWeather(result);
    });
  } 

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>

        {/* Search Box */}
        <div>
          <input onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder='Search...'
          />
          <button onClick={searchPassed}>Search</button>
        </div>
        {/* If weather is not undefined */}
        {typeof weather.main != "undefined" ? (
        <div>
          {/* Location */}
          <p>{weather.name}</p>

          {/* Temperature F/C */}
          <p>{weather.main.temp} °C</p>

          {/* Condition (Sunny) */}
          <div>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div> 
        </div>
        ) : (
          null
        )}
        {weather.cod == 404 ? <p>Nothing Found</p> : null}
      </header>
    </div>
  );
}

export default App;
