import './App.css'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'
import Form from './components/form/Form'
import React, { useEffect } from 'react'

export default function App() {
    const fetchData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
      fetchData();
    }, []);

  return (
    <div>
      <Form onWeatherSearch={fetchData} />
      <WeatherDisplay />
    </div>
  )
}
