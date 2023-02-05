import React, { useEffect, useState } from 'react'
import { get5DaysForecast, getCurrentWeather } from './api/services'
import { LeftContent } from './LeftContent'
import { MainContent } from './MainContent'

function App() {
  const [position, setposition] = useState({ latitude: -31.4173391, longitude: -64.183319 })
  const [currentWeather, setcurrentWeather] = useState(null)
  const [fiveDayForecast, setfiveDayForecast] = useState(null)
  const [selectedUnit, setselectedUnit] = useState('c')

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
      }
    }
    fetchData()
  }, [position])

  return (
    <div className='flex justify-between flex-col xl:flex-row'>
      <LeftContent setposition={setposition} currentWeather={currentWeather} selectedUnit={selectedUnit} />
      <MainContent fiveDayForecast={fiveDayForecast} currentWeather={currentWeather} selectedUnit={selectedUnit} setselectedUnit={setselectedUnit} />
    </div>
  )
}

export default App
