import './App.css';
import { useState } from 'react';
import clouds from './assets/images/Vector5.png';

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
      setWeather(result);
      });
  } 
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1 className='mb-4'>Weather Around The World</h1>
        {/* Search Box */}
        <div className='d-flex gap-2 mb-4'>
          <input className='form-control rounded' onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder='Search...'
          />
          <button className='btn btn-outline-white btn-primary' onClick={searchPassed}>Search</button>
        </div>
        {/* If weather is not undefined */}
        {typeof weather.main != "undefined" ? (
        <div>
          {/* Location */}
          <p>{weather.name}</p>
          <img className='weather_logo' src={require(`./assets/images/${weather.weather[0].main}.png`)} />
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
      <footer className="App-footer">
        <p className='text-muted fs-4'>Weather App</p>
        <p className='text-white fs-4'>Copyright &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
