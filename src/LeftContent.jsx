import CurrentWeatherSection from './components/CurrentWeatherSection'

export const LeftContent = ({ setposition, currentWeather, selectedUnit }) => {
  return (
    <div className='flex w-full h-screen bg-principal flex-col px-8 py-5 box-border justify-around items-center
      xl:w-[38%]
      after:bg-cloud-pattern after:absolute after:w-full after:h-4/6 after:bg-no-repeat after:bg-top after:opacity-5'
    >
      <CurrentWeatherSection setposition={setposition} currentWeather={currentWeather} selectedUnit={selectedUnit} />
    </div>
  )
}
