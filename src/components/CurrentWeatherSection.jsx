import React from 'react'

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
      <div className='flex flex-row justify-around w-full'>
        <button
          type='button'
          className='text-principal-text shadow-xl bg-[#6E707A] hover:bg-[#6e707ae1] font-medium text-sm px-4 py-2.5 dark:bg-[#6e707ac7] dark:hover:bg-[#6E707A]'
        >
          Search for places
        </button>
        <button
          onClick={() => handleGetCurrentweatherLocation(setposition)}
          type='button'
          className='text-white shadow-xl bg-[#6E707A] hover:bg-[#6e707ae1] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-[#6e707ac7] dark:hover:bg-[#6E707A]'
        >
          <svg className='w-4 h-4' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M24 12h-3.225A8.287 8.287 0 0 0 13 4.225V1h-1v3.225A8.287 8.287 0 0 0 4.225 12H1v.955h3.223A8.287 8.287 0 0 0 12 20.775V24h1v-3.225A8.287 8.287 0 0 0 20.775 13H24zm-11.5 7.8a7.3 7.3 0 1 1 7.3-7.3 7.308 7.308 0 0 1-7.3 7.3zm4.5-7.3A4.5 4.5 0 1 1 12.5 8a4.506 4.506 0 0 1 4.5 4.5z" /><path fill="none" d="M0 0h24v24H0z' /></svg>
          <span className='sr-only'>Icon description</span>
        </button>
        {/* <button onClick={() => handleGetCurrentweatherLocation(setposition)}>
        Geolocalizar
      </button> */}
      </div>
    </>
  )
}

export default CurrentWeatherSection
