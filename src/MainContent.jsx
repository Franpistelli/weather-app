import TodayHighlightsCard from './components/TodayHighlightsCard'
import WeatherCard from './components/WeatherCard'

export const MainContent = ({ fiveDayForecast, currentWeather, selectedUnit, setselectedUnit }) => {
  return (
    <div className='m-0 w-full box-border bg-principal-dark px-8 py-4 xl:w-3/4 xl:h-screen lg:px-24 xl:px-40 xl:py-0 xl:overflow-y-auto'>
      {currentWeather &&
        <>
          <div className='hidden justify-end p-3 xl:flex'>
            <button onClick={() => setselectedUnit('c')} className={`font-raleway font-bold p-4 cursor-pointer m-2 rounded-[50%] ${selectedUnit === 'f' ? ' text-principal-text bg-[#585676] hover:opacity-60' : 'text-[#110E3C] bg-principal-text'}`}>°C</button>
            <button onClick={() => setselectedUnit('f')} className={`font-raleway font-bold p-4 cursor-pointer m-2 rounded-[50%] ${selectedUnit === 'c' ? ' text-principal-text bg-[#585676] hover:opacity-60' : 'text-[#110E3C] bg-principal-text'}`}>°F</button>
          </div>

          <div className='flex gap-6 flex-wrap justify-center items-center p-0 xl:p-5 xl:justify-between'>
            {fiveDayForecast.map((item, index) => {
              const date = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date(item.dt * 1000))
              const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
              return (
                <WeatherCard key={index} date={index ? date : 'Tomorrow'} maxTep={item.main.temp_max} minTep={item.main.temp_min} logoUrl={iconUrl} selectedUnit={selectedUnit} />
              )
            })}
          </div>
          <h2 className='text-principal-text font-bold text-2xl font-raleway p-0 my-4 xl:p-8 xl:my-0'>Today’s Hightlights</h2>
          <div className='flex gap-6 flex-wrap justify-center items-center p-0 xl:p-5 xl:justify-between'>
            <TodayHighlightsCard name='Wind status' value={currentWeather.wind.speed} unit='m/s' type='wind' extraData={currentWeather.wind} />
            <TodayHighlightsCard name='Humidity' value={currentWeather.main.humidity} unit='%' type='humidity' />
            <TodayHighlightsCard name='Visibility' value={currentWeather.visibility} unit='Km' />
            <TodayHighlightsCard name='Air Pressure' value={currentWeather.main.pressure} unit='hPa' />
          </div>

          <p className='font-raleway text-slate-700 font-bold text-base text-center mt-2'>created by <a href='https://github.com/francopistelli'>Franco Pistelli</a> 💌 - devChallenges.io</p>
        </>}
    </div>
  )
}
