import React, { useEffect, useState } from 'react'
import TodayHighlightsCard from './components/TodayHighlightsCard'
import WeatherCard from './components/WeatherCard'
import { get5DaysForecast, getCurrentWeather, getCoordinatesByLocationName } from './api/services'
import CurrentWeatherSection from './components/CurrentWeatherSection';

// The app will use this API https://www.weatherapi.com/

function App() {

  const [position, setposition] = useState(null)
  const [currentWeather, setcurrentWeather] = useState(null)
  const [fiveDayForecast, setfiveDayForecast] = useState(null)

  useEffect(() => {
    async function fetchData() {

      if (position) {
        const [today, forecast] = await Promise.all([
          getCurrentWeather({ lat: position.latitude, lon: position.longitude }),
          get5DaysForecast({ lat: position.latitude, lon: position.longitude }),
          //getCoordinatesByLocationName({ locationName: "Cordoba,Argentina" })
        ])
        setcurrentWeather(today)
        setfiveDayForecast(forecast)
        console.log('responses', responses)
      }
    }
    fetchData();
  }, [position]);


  return (
    <div className="flex box-border h-[100vh] w-full flex-col xl:flex-row">

      {/* First section */}
      <div className='flex grow-[1] shrink bg-principal flex-col items-center p-4'>
        <CurrentWeatherSection setposition={setposition} />
      </div>

      {/* second section */}
      <div className='flex flex-col grow-[1] bg-principal-dark p-36 gap-y-12 flex-wrap'>

        <div className='flex w-full h-48 gap-6 flex-wrap justify-between'>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>

        <div className='flex w-full h-48 gap-6 flex-row xl:flex-col'>
          <h2 className='text-principal-text text-3xl'>Today’s Hightlights</h2>
          <div className='flex flex-row justify-between'>
            <TodayHighlightsCard />
            <TodayHighlightsCard />
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
