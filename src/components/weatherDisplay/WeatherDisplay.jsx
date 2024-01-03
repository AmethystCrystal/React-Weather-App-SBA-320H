import React from 'react';
import './weatherDisplay.css';

export default function WeatherDisplay({ location, currentTemp, image }) {
  const loaded = () => {
    const iconUrl = `https:${image.condition.icon}`;
    return (
      <>
        <img src={iconUrl} alt="weather icon" width="40%"/>
        <h1>{currentTemp.temp_f} °F</h1><br></br>
        <p>{location.name}</p>  
      </>
    )
  }

  const loading = () => {
    return <h1>Location doesn't exist</h1>
  }

  return location && currentTemp ? loaded() : loading();
}
