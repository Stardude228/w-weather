import React from 'react';
import { 
    Accordion,
    AccordionItem, 
    AccordionItemButton, 
    AccordionItemHeading, 
    AccordionItemPanel 
} from 'react-accessible-accordion';
import './forecast.css'

function Forecast({data}) {

    const week_days =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const dayInWeek = new Date().getDay();
    const forecastDays = week_days.slice(dayInWeek, week_days.length).concat(week_days.slice(0, dayInWeek))

    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 5).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img className='icon-small' src={`assets/${item.weather[0].icon}.png`} alt='weather' />
                                    <label className='day'>{forecastDays[index]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='description'>{Math.round(item.main.temp)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <span>Details</span>
                                <div className='daily-details-grid-item'>
                                    <label>Feels Like: </label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed: </label>
                                    <label>{Math.round(item.wind.speed)} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast
