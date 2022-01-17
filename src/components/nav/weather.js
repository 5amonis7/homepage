import React, { useState, useEffect } from 'react'

const Weather = () => {

    const [ items, setItems] = useState({
        temp: '',
        img: '',
        description: '',
        low: '',
        high: '',
        wind: ''
    })

    let current = Math.round (items.temp);
    let High = Math.round(items.high);
    let Low = Math.floor(items.low);

    let icon = 'https://openweathermap.org/img/w/' + items.img + '.png';


   

    // Fecthing weather from openweathermap api
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Mableton&appid=${API_KEY}&units=imperial`;
        let isMounted = true;
        fetch(API_URL)
        .then( res => res.json())
        .then(data => {
            if (isMounted){
                setItems({
                    temp: data.list[0].main.temp,
                    img: data.list[0].weather[0].icon,
                    description: data.list[0].weather[0].description,
                    low: data.list[0].main.temp_min,
                    high: data.list[0].main.temp_max,
                    wind: data.list[0].main.temp_min
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })
        
        return () => { isMounted = false;}
    }, [])

    
    console.log(items)

    return (
        <div className="weather">
            <p className='current'>{current}<span className='F'>&#8457;</span></p>

            <div className="extras">
                <p className='high'>High: {High}&deg;</p>
                <p className='low'>Low: {Low}&deg;</p>
                <p className='wind'>Wind: {items.wind}</p>
            </div>

            <img className="icon" src={icon} alt='weather' />
            <p className='description'>{items.description}</p>




            {/* <hr className="weather-line" /> */}
            {/* <div className="temp"> */}
            {/* </div> */}
        </div>
    )
}

export default Weather
