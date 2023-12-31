import React, { useEffect, useState } from 'react'
import './App.css'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'
import Form from './components/form/Form'

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (searchTerm) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setWeatherData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData('New York');
  }, []);

  return (
    <div>
      <Form onWeatherSearch={fetchData} />
      {weatherData && (
        <WeatherDisplay
          location={weatherData.location}
          currentTemp={weatherData.current}
          condition={weatherData.current}
          image={weatherData.current}
        />
      )}

    </div>
  )
}
