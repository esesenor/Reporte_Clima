import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import WeatherContainer from './components/WeatherContainer'
import Select from 'react-select'
import { citys } from './db/citys'

function App() {
const [weather, setWeather] = useState(null)
const [selectCity, setselectCity] = useState("Guarne")

  const success = () => {
    const API_KEY = "da79b2601af3a29ca663205988d8e05a"
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&appid=${API_KEY}`)
    .then(({data}) => setWeather(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [selectCity])


  const handleDark = () => {
      let element = document.body;
      element.classList.toggle("dark");
  }

  const handleSelectCity = ({value}) => {
    setselectCity(value)
  }


  {/**************************************************************************************************** */}

  return (
    
        <main className='font-["Lato"] drop-shadow-xl grid grid-cols-1 items-center min-h-screen px-2
        bg-gradient-to-r from-blue-300 via-pink-200 to-sky-500
        text-[rgb(42,20,48)]
        dark:bg-gradient-to-r dark:from-black dark:via-[rgb(42,20,48)] dark:to-black
        dark:text-blue-100'>
        
        
        <div className='grid grid-cols-1 justify-center items-center'>
        <div className='grid grid-cols-[auto_1fr] gap-0'>
          <button
            type="button"
            onClick={handleDark} 
            id="toggle"
            className=' bg-[rgb(42,20,48)] text-cyan-100 rounded-full m-[10px_auto] p-1
             dark:bg-cyan-100  dark:text-[rgb(42,20,48)]'>
            	&#9788;
          </button>

          <div className=' w-[200px] m-auto p-1 dark:text-black'>
            <Select 
              defaultValue={{label: 'Ubicación actual', value: 'success'}}
              options = {citys}
              onChange = {handleSelectCity}
            />
         </div>
         </div>

          {/** CONTENIDO PRINCIPAL */}
          <div className=' mt-12'>
          {
            weather === null ? 
              (<h3>Cargando...</h3>) : 
              (<WeatherContainer weather={weather} />)
          }
          </div>
       </div>
    </main>
  )
}

export default App
