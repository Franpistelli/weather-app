const BASE_URL = 'https://api.openweathermap.org'

export async function get5DaysForecast({ lat, lon }) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  try {
    const response = await fetch(`${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`, requestOptions)
    const result = await response.json()
    return result
  } catch (e) {
    console.log('get5DaysForecast error', e)
    return null
  }
}

export async function getCurrentWeather({ lat, lon }) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  try {
    const response = await fetch(`${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`, requestOptions)
    const result = await response.json()
    return result
  } catch (e) {
    console.log('getCurrentWeather error', e)
    return null
  }
}

export async function getCoordinatesByLocationName({ locationName }) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  try {
    const response = await fetch(`${BASE_URL}/geo/1.0/direct?q=${locationName}&limit=5&appid=${import.meta.env.VITE_API_KEY}`, requestOptions)
    const result = await response.json()
    return result
  } catch (e) {
    console.log('getCoordinatesByLocationName error', e)
    return null
  }
}
