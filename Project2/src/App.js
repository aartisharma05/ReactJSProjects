import React, { useState } from 'react';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import Forecast from './components/forecast/forecast';
function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

const handleonSearchChange = (searchData)=>{
  // const [lat, lon ] = searchData.value.split(" ");
  const cityName = searchData.value.split(" ");

  // const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid= ${WEATHER_API_KEY}`);
const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`);

// /weather?q=${*cityName*}&appid=${*API_key*}&units=metric


  // const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`);
  const forecastFetch = fetch(
    `${WEATHER_API_URL}/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
  );


  Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response)=> {
     const weatherResponse = await response[0].json();
     const forecastResponse = await response[1].json();


     setCurrentWeather({city: searchData.label, ...weatherResponse});
     setForecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err)=> console.log(err));
}


// console.log(forecast);

  return (
    <div className="container">
      <h1 className='heading'>Weather APP</h1>
     <Search onSearchChange={handleonSearchChange}/>
     {currentWeather && <CurrentWeather data={currentWeather}/> }
     {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
