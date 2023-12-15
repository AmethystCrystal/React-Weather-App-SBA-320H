import React from 'react'

export default function WeatherDisplay({ location, currentTemp }) {
  const loaded = () => {
      return (
    <>
      <h1>{location.name}</h1>
      <h1>{currentTemp.temp_f}</h1>
    </>
  )
  }
  
  const loading = () => {
    return <h1>nothing here</h1>
  }

  return location && currentTemp ? loaded() : loading();
}
