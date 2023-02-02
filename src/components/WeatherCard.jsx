import React from 'react'
import logo from '../assets/Clear.png'

const WeatherCard = () => {
  return (
    <div className='bg-principal font-raleway text-base flex flex-col items-center w-32 h-44 justify-center p-3'>
      <p className='text-principal-text'>Tomorrow</p>
      <img
        className='w-16'
        src={logo}
      />
      <div className='flex w-full justify-between items-center'>
        <h6 className='text-principal-text'>16 °c</h6>
        <h6 className='text-principal-medium-text'>11 °c</h6>
      </div>
    </div>
  )
}

export default WeatherCard
