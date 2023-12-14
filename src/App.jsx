import './App.css'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'
import React from 'react'

export default async function Weather() {
  
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78559492c2mshae7e73506b12476p1382e7jsnfa33ce985a0e',
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
  
  
    return (
    <div>
      <WeatherDisplay/>
    </div>
  )
}
