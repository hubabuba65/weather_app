import React from 'react'
import Form from './pages/Form'
import WeatherInfo from './pages/WeatherInfo'
import { useGlobalContext } from './context'

function Router() {

  const { main } = useGlobalContext()

  return (
    <main>
      <div className={main ? (main.temp > 15 ? 'app warm' : 'app') : null}>
        <Form />
        <WeatherInfo />
      </div>
    </main>
  )
}

export default Router