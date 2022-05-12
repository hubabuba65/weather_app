import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'
import TextField from '@mui/material/TextField';

function Form() {

    const { location, setLocation, searchFunction, main } = useGlobalContext()
    const searchValue = useRef()

    useEffect(() => {
      searchValue.current.focus()
    }, [])

  return (
    <div>
      <input 
        id="outlined-basic" 
        label="Enter city name" 
        variant="outlined" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        onKeyPress={searchFunction}
        ref={searchValue}
      />
    </div>
  )
}

export default Form