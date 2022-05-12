import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const AppContext = createContext()

function AppProvider({ children }) {

    const [location, setLocation] = useState('')
    const [data, setData] = useState([])

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fddce9bca2de8d62b4c8d1bab2b764c5`

    const searchFunction = (e) => {
        if(e.key === 'Enter') {
            axios.get(url)
                .then((res) => {
                    setData(res.data)
                    console.log(res.data)
                })
            // fetch(url)
            //     .then(res => res.json())
            //     .then(result => setData(result))
            
            setLocation('')
        }
    }

  return (
    <AppContext.Provider value={{
        location,
        setLocation,
        data,
        searchFunction,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  { AppContext, AppProvider }