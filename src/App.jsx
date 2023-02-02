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
    <div className='flex justify-between flex-col xl:flex-row'>

      {/* First section */}
      <div className='flex w-full h-screen bg-principal flex-col px-8 py-5 box-border justify-around items-center
      xl:w-[38%]
      after:bg-cloud-pattern after:absolute after:w-full after:h-4/6 after:bg-no-repeat after:bg-top after:top-1/3 after:opacity-5'
      >
        <CurrentWeatherSection setposition={setposition} />
      </div>

      {/* second section */}
      <div className='m-0 w-full box-border bg-principal-dark p-8 xl:w-3/4 xl:h-screen xl:px-24 xl:overflow-y-auto'>
        <div className='hidden justify-end p-3 xl:flex'>
          <button className='font-raleway font-bold p-4 text-white bg-slate-600 cursor-pointer m-2 rounded-[50%]'>°C</button>
          <button className='font-raleway font-bold p-4 text-white bg-slate-600 cursor-pointer m-2 rounded-[50%]'>°F</button>
        </div>

        <div className='flex gap-6 flex-wrap justify-center items-center p-0 xl:p-5 xl:justify-between'>
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>

        <h2 className='text-principal-text text-3xl font-raleway p-0 my-4 xl:p-8 xl:my-0'>Today’s Hightlights</h2>
        <div className='flex gap-6 flex-wrap justify-center items-center p-0 xl:p-5 xl:justify-between'>
          <TodayHighlightsCard />
          <TodayHighlightsCard />
          <TodayHighlightsCard />
          <TodayHighlightsCard />
        </div>

        <p className='font-raleway text-slate-700 font-bold text-base text-center mt-2'>created by <a href='https://github.com/francopistelli'>Franco Pistelli</a> 💌 - devChallenges.io</p>

      </div>
    </div>
  )
}

export default App
