import './App.css'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'
import React, { useEffect } from 'react'

export default function App() {
  useEffect( () => {
    async function fetchData() {
          const apiKey = import.meta.env.VITE_API_KEY;
          console.log(apiKey)
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    }
    fetchData()
  }, [])




  return (
    <div>
      <WeatherDisplay />
    </div>
  )
}
