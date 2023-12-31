import React from 'react'

export default function WeatherDisplay({ location, currentTemp, condition, image }) {
  const loaded = () => {
    return (
      <>
        <img src={image.condition.icon} alt="weather icon" width="30%"/>
        <h1>{currentTemp.temp_f} °F</h1>
        <h2>{location.name}</h2>
        <h2>{condition.condition.text}</h2>
        
      </>
    )
  }

  const loading = () => {
    return <h1>Location doesn't exist</h1>
  }

  return location && currentTemp ? loaded() : loading();
}
