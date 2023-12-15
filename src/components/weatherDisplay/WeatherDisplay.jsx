import React from 'react'

export default function WeatherDisplay(props) {
  const loaded = () => {
      return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.temp_f}</h1>
    </>
  )
  }
  
  const loading = () => {
    return <h1>nothing here</h1>
  }

  return props ? loaded() : loading();
}
