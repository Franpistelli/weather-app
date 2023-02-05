const BASE_URL = 'https://api.openweathermap.org'

export async function get5DaysForecast({ lat, lon }) {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  try {
    const response = await fetch(`${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`, requestOptions)
    const result = await response.json()

    const fiveDaysForecast = []

    fiveDaysForecast.push(result.list[0])

    let currentDay = new Date(result.list[0].dt * 1000).getDay()

    for (const i in result.list) {
      const elementDay = new Date(result.list[i].dt * 1000).getDay()
      if (currentDay !== elementDay) {
        fiveDaysForecast.push(result.list[i])
        currentDay = elementDay
      }
    }

    return fiveDaysForecast
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
