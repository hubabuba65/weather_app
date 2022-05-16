import React from 'react'
import Form from './pages/Form'
import WeatherInfo from './pages/WeatherInfo'
import { useGlobalContext } from './context'

function Router() {

  const { main } = useGlobalContext()

  return (
    <main>
      <div className='app '>
        <Form />
        <WeatherInfo />
      </div>
    </main>
  )
}

export default Router