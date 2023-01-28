import React, { useEffect, useState } from 'react'
import TodayHighlightsCard from './components/TodayHighlightsCard'
import WeatherCard from './components/WeatherCard'
import { get5DaysForecast, getCurrentWeather } from './api/services'
import CurrentWeatherSection from './components/CurrentWeatherSection'

function App() {
  const [position, setposition] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [currentWeather, setcurrentWeather] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [fiveDayForecast, setfiveDayForecast] = useState(null)

  useEffect(() => {
    async function fetchData() {
      if (position) {
        const [today, forecast] = await Promise.all([
          getCurrentWeather({ lat: position.latitude, lon: position.longitude }),
          get5DaysForecast({ lat: position.latitude, lon: position.longitude })
          // getCoordinatesByLocationName({ locationName: "Cordoba,Argentina" })
        ])
        setcurrentWeather(today)
        setfiveDayForecast(forecast)
        console.log('response', [today, forecast])
      }
    }
    fetchData()
  }, [position])

  return (
    <div className='flex box-border h-[100vh] w-full flex-col xl:flex-row'>

      {/* First section */}
      <div className='flex grow-[1] shrink bg-principal flex-col items-center p-4'>
        <CurrentWeatherSection setposition={setposition} />
      </div>

      {/* second section */}
      <div className='flex flex-col grow-[1] bg-principal-dark p-8 gap-y-12 flex-wrap justify-center items-center'>

        <div className='flex w-full h-48 gap-6 flex-wrap'>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>

        <div className='flex w-full h-48 gap-6 flex-col'>
          <h2 className='text-principal-text text-3xl font-raleway'>Today’s Hightlights</h2>
          <div className='flex flex-row flex-wrap gap-4'>
            <TodayHighlightsCard />
            <TodayHighlightsCard />
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
