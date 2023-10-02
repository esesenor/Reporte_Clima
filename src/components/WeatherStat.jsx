import React from 'react'

const WeatherStat = ({icon, value, unit}) => {
  return (
    <div className='flex gap-1 items-center'>
        <img  src={icon} alt="" />
        <span className='text-sm m-0 p-0'>{value}</span>
        <span className='text-xs m-0 p-0'>{unit}</span>
    </div>
  )
}

export default WeatherStat
