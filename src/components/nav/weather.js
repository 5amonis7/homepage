import React, { useState, useEffect } from 'react'

const Weather = () => {

    const [ items, setItems] = useState([])
    const [ temp, setTemp ] = useState('')
    const [ img, setImg ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ low, setLow] = useState('')
    const [ high, setHigh] = useState('')

    let current = Math.round(temp);
    let High = Math.round(high);
    let Low = Math.floor(low);

    let icon = 'http://openweathermap.org/img/w/' + img.toString() + '.png';


    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Mableton&appid=${API_KEY}&units=imperial`

    // Fecthing weather from openweathermap api
    useEffect(() => {
        let isMounted = true;
        fetch(API_URL)
        .then( res => res.json())
        .then(data => {
            if (isMounted){
                setItems(data)
                setTemp(data.list[0].main.temp)
                setImg(data.list[0].weather[0].icon)
                setDescription(data.list[0].weather[0].description)
                setHigh(data.list[0].main.temp_max)
                setLow(data.list[0].main.temp_min)
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
            <img className="icon" src={icon} alt='weather' />
            <p className='description'>{description.toString()}</p>
            <hr className="weather-line" />
            <div className="temp">
                <p className='current'>{current}<span className='F'>&#8457;</span></p>
                <p className='min-max'>{Low}/{High}</p>
            </div>
        </div>
    )
}

export default Weather
