import React from 'react'
import './current-weather.css'

function CurrentWeather({ data }) {
    function refreshPage(){ 
        window.location.reload(); 
    }
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img src={`assets/${data.weather[0].icon}.png`} className='weather-icon' alt='weather' />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label details-span'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.round(data.wind.speed)} m/s</span>
                    </div>
                </div>
            </div>
            <button type='button' onClick={ refreshPage } className='ripple-button'> <span>Refresh</span> </button> 
        </div>
    )
}

export default CurrentWeather
