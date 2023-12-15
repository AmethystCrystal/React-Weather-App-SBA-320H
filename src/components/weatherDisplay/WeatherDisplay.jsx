import React from 'react'

export default function WeatherDisplay({ location, currentTemp, condition, image }) {
  const loaded = () => {
      return (
    <>
      <h1>Location: {location.name}</h1>
      <h1>Temperature: {currentTemp.temp_f} °F</h1>
      <h1>Currently: {condition.condition.text}</h1>
      <img src={image.condition.icon} alt="weather icon"/>
    </>
  )
  }
  
  const loading = () => {
    return <h1>nothing here</h1>
  }

  return location && currentTemp ? loaded() : loading();
}
