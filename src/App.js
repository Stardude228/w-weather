import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/weather/Current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/search/Api';
import { useState } from 'react';
import Forecast from './components/weather/Forecast';

function App() {

  const [weatherStatus, setWeatherStatus] = useState(null)
  const [forecastStatus, setForecastStatus] = useState(null)

  const handleOnSearchChange =  (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
    .then(async(response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setWeatherStatus({city: searchData.label, ...weatherResponse});
      setForecastStatus({city: searchData.label, ...forecastResponse});
    })
    .catch((error)=>console.log(error));
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      {weatherStatus && <CurrentWeather data={weatherStatus} />}
      {forecastStatus && <Forecast data={forecastStatus}/>}
    </div>
  );
}

export default App;
