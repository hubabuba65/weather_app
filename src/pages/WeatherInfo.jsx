import React from 'react'
import { useGlobalContext } from '../context'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function WeatherInfo() {

    const { data } = useGlobalContext()

    const { name, main, weather, wind, visibility } = data

    const backgroundFont = () => {
      switch(weather.main) {
        case 'Clouds':
          return 'background-font-clouds';
        case 'Rain':
          return 'background-font-snow'
        case 'Snow':
          return 'background-font-clouds'
        case 'Extreme':
          return 'background-font-extreme'
        case 'Clear':
          return 'background-font-clear'
      }
      // if(weather.main === 'Clouds') {
      //   return 'background-font-clouds'
      // } else if(weather.main === 'Rain') {
      //   return 'background-font-rain'
      // } else if(weather.main === 'Snow') {
      //   return 'background-font-snow' 
      // } else if(weather.main === 'Extreme') {
      //   return 'background-font-extreme'
      // } else if(weather.main === 'Clear') {
      //   return 'background-font-clear'
      // }
    }

  return (
    <div className='container'>
      <div className="">
          <div className="">
            <p>{name}</p>
          </div>
          <div className="">
            {main ? <h1>{main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className=''>
            {main ? <p><ArrowUpwardIcon />{main.temp_max.toFixed()}°C</p> : null}
          </div>
          <div>
            {main ? <p><ArrowDownwardIcon />{main.temp_min.toFixed()}°C</p> : null}
          </div>
          <div className="">
            {weather ? <p>{weather[0].description}</p> : null}
          </div>
        </div>
        {main ? <div className="">
          <h1>Information</h1>
          <p>wind force: </p>
          {wind ? <h2>{wind.speed.toFixed()} km/h</h2> : null}
          <p>visibility: </p>
          {visibility ? <h2>{visibility} m</h2> : null}
          <p>pressure :</p>
          {main ? <h2>{main.pressure} hPa</h2> : null} 
          <p>humidity: </p>
          {main ? <h2>{main.humidity} %</h2> : null} 
        </div> : null}
    </div>
  )
}

export default WeatherInfo