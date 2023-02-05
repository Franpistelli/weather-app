import React from 'react'
// import logo from '../assets/Clear.png'

const WeatherCard = ({ date, maxTep, minTep, logoUrl, selectedUnit }) => {
  const max = selectedUnit === 'c' ? `${Math.round(maxTep)} °C` : `${Math.round((maxTep * 9 / 5) + 32)} °F`
  const min = selectedUnit === 'c' ? `${Math.round(minTep)} °C` : `${Math.round((minTep * 9 / 5) + 32)} °F`
  return (
    <div className='bg-principal font-raleway text-base flex flex-col items-center w-32 h-44 justify-between p-3'>
      <p className='text-principal-text'>{date}</p>
      <img
        className='w-16'
        src={logoUrl}
      />
      <div className='flex w-full justify-between items-center'>
        <h6 className='text-principal-text'>{max}</h6>
        <h6 className='text-principal-medium-text'>{min}</h6>
      </div>
    </div>
  )
}

export default WeatherCard
