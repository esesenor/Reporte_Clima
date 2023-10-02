import React from 'react'
import WeatherStat from './WeatherStat'
import { useState } from 'react'

const WeatherContainer = ({weather, weatherCity}) => {
    


    const [isCelcius, setIsCelsius] = useState(true)

    const handleChangeUnit = () => {
        setIsCelsius(!isCelcius)
    }

    const changeUnitTemp = (temp) => {
        return isCelcius ?
            //transformación a celcius
             `${(temp - 273.15).toFixed(1)}°C`
            :
            //transformacion farenheigth
             `${(((temp - 273.15) * 9/5) + 32).toFixed(1)}°F`
    }

  return (
    <section className='text-center items-center ml-auto'>

        <h3 className='text-4xl m-3 font-bold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-950  via-pink-950 to-blue-700
            dark:text-yellow-200
            '>
                {weather.name}, {weather.sys.country}
            </span>
            
        </h3>

        <div className='grid gap-5 sm:grid-cols-[1fr_auto] sm:m-[20px_auto] sm:max-w-lg'>
            
     { /**w-0 h-0 
   border-l-[100px] border-l-transparent
   border-b-[250px] border-b-orange-500
   border-r-[100px] border-r-transparent */  }

            {/*SECCION SUPERIOR*/}
            <article className='bg-[rgba(90,90,90,0.5)] rounded-2xl grid grid-cols-2 items-center p-3 drop-shadow-md
              border-b-2 border-r-2 border-[rgba(0,0,0,0.3)]'>


                <h4 className='col-span-2 capitalize text-lg font-semibold'>{weather.weather[0].description}
                </h4>

                <span className='text-5xl m-auto font-bold  	drop-shadow-xl shadow-orange-600'>
                    {changeUnitTemp(weather.main.temp)}
                </span>

                <picture className='m-auto'>
                    <img 
                    src= {`/icons/${weather.weather[0].icon}.png`}
                    alt="" 
                    />
                </picture>

            </article>

            {/*SECCION INFERIOR*/}
            <article className='grid grid-cols-[1fr_auto_1fr_auto_1fr] justify-items-center bg-[rgba(90,90,90,0.5)] rounded-2xl m-0 p-0 py-2 sm:grid-cols-1 drop-shadow-md
            border-b-2 border-r-2 border-[rgba(0,0,0,0.3)]'>

                <WeatherStat icon="/wind.png" unit="m/s" value={weather.wind.speed} 
                />

                <div className=' bg-slate-600 m-0 p-0 h-[20px] w-[1px] sm:h-[1px] sm:w-[70px] sm:m-3'></div>

                <WeatherStat icon="/humidity.png" unit="%" value={weather.main.humidity} 
                />

                <div className=' bg-slate-600 m-0 p-0 h-[20px] w-[1px] sm:h-[1px] sm:w-[70px] sm:m-3'></div>

                <WeatherStat icon="/pressure.png" unit="hPa" value={weather.main.pressure} 
                />
                 
            </article>
        </div>

        <button onClick={handleChangeUnit} className='bg-[rgba(255,100,100,0.9)] p-[10px] m-4 rounded-md drop-shadow-lg- bg-gradient-to-r from-blue-950 via-pink-500 to-blue-700 font-extrabold text-white 
        dark:bg-gradient-to-r dark:from-pink-500 dark:via-blue-600 dark:to-pink-700'>C° / F°</button>


    </section> 
  )
}

export default WeatherContainer
