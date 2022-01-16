import React, { useState, useEffect } from 'react'

const Weather = () => {

    const [ items, setItems] = useState([])

    // Fecthing weather from openweathermap api
    useEffect(() => {
        let isMounted = true;
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Mableton&appid=3c7a68c7bf9dc991bdd462aa18785e96&units=imperial')
        .then( res => res.json())
        .then(json => {
            if (isMounted) setItems(json)
        })
        .catch((error) => {
            console.log(error);
        })
        
        return () => { isMounted = false;}
    }, [])

    
    
    return (
        <div className="weather">
            
        </div>
    )
}

export default Weather
