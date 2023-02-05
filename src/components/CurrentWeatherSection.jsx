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
    setposition(crd)
  }, error, options)
}

const CurrentWeatherSection = ({ setposition, currentWeather, selectedUnit }) => {
  if (!currentWeather) return null
  const { name, weather, main } = currentWeather

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
      </div>

      <img className='w-96' src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weather status image' />

      <p><span className='text-principal-text font-raleway text-[140px] font-medium'>{selectedUnit === 'c' ? Math.round(main.temp) : Math.round((main.temp * 9 / 5) + 32)}</span><span className='text-principal-medium-text font-raleway text-8xl font-medium'>{selectedUnit === 'c' ? '°C' : '°F'}</span></p>
      <p className='text-principal-medium-text font-raleway text-2xl font-semibold'>{weather[0].main}</p>
      <div className='flex justify-center items-center m-0 font-raleway'>
        <span className='inline-block text-principal-dark-text'>Today  •</span>
        <span className='inline-block text-principal-dark-text ml-1'>{new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date())}</span>
      </div>
      <p className='flex justify-center items-center m-0  font-raleway'>
        <span className='material-symbols-outlined inline-block text-principal-dark-text'>
          <svg
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z'
              fill='currentColor'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z'
              fill='currentColor'
            />
          </svg>
        </span>
        <span className='inline-block text-principal-dark-text ml-1'>{name}</span>
      </p>
    </>
  )
}

export default CurrentWeatherSection
