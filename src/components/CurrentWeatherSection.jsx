import React from 'react'
import image from '../assets/HeavyCloud.png'

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

function handleGetCurrentweatherLocation(setposition) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  navigator.geolocation.getCurrentPosition(pos => {
    const crd = pos.coords
    console.log('Tu ubicación actual es:')
    console.log(`Latitud : ${crd.latitude}`)
    console.log(`Longitud: ${crd.longitude}`)
    console.log(`Más o menos ${crd.accuracy} metros.`)
    setposition(crd)
  }, error, options)
}

const CurrentWeatherSection = ({ setposition }) => {
  return (
    <>
      <div className='flex flex-row justify-between w-full'>
        <button
          type='button'
          className='text-principal-text font-raleway font-medium text-sm shadow-xl bg-[#6E707A] hover:bg-[#6e707ae1] px-4 py-2.5 dark:bg-[#6e707ac7] dark:hover:bg-[#6E707A] cursor-pointer'
        >
          Search for places
        </button>
        <button
          onClick={() => handleGetCurrentweatherLocation(setposition)}
          type='button'
          className='text-white font-raleway font-medium text-sm shadow-xl bg-[#6E707A] hover:bg-[#6e707ae1] rounded-[50%] p-2.5 text-center inline-flex items-center dark:bg-[#6e707ac7] dark:hover:bg-[#6E707A] cursor-pointer'
        >
          <svg className='w-4 h-4' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M24 12h-3.225A8.287 8.287 0 0 0 13 4.225V1h-1v3.225A8.287 8.287 0 0 0 4.225 12H1v.955h3.223A8.287 8.287 0 0 0 12 20.775V24h1v-3.225A8.287 8.287 0 0 0 20.775 13H24zm-11.5 7.8a7.3 7.3 0 1 1 7.3-7.3 7.308 7.308 0 0 1-7.3 7.3zm4.5-7.3A4.5 4.5 0 1 1 12.5 8a4.506 4.506 0 0 1 4.5 4.5z" /><path fill="none" d="M0 0h24v24H0z' /></svg>
          <span className='sr-only'>Icon description</span>
        </button>
        {/* <button onClick={() => handleGetCurrentweatherLocation(setposition)}>
        Geolocalizar
      </button> */}
      </div>

      {/* <div className='bg-cloud-pattern bg-no-repeat w-full h-96 opacity-20'> */}
      <img className='w-96' src={image} alt='weather status image' />
      {/* </div> */}

      <p><span className='text-principal-text font-raleway text-7xl font-bold'>12</span><span className='text-secondaty-text font-raleway text-2xl font-semibold'>°c</span></p>
      <p className='text-secondaty-text font-raleway text-2xl font-semibold'>sunny</p>
      <div className='flex justify-center items-center m-0  font-raleway'>
        <span className='inline-block'>Today  •</span>
        <span className='inline-block'>Lunes,15 de marzo</span>
      </div>
      <p className='flex justify-center items-center m-0  font-raleway'>
        <span className='material-symbols-outlined inline-block'>location_on</span>
        <span className='inline-block'>cordoba</span>
      </p>
    </>
  )
}

export default CurrentWeatherSection
