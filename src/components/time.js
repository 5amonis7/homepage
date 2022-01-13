import React, { useState } from 'react'
import Search from "./search"

const Time = () => {

   const [ time, setTime ] = useState("");
    const [ hours, setHours] = useState("");

   window.onload=clock();
   function clock(){
       let date = new Date().toLocaleTimeString();
       let H = new Date().getHours();
       setTimeout(() => {
           setHours(H)
           setTime(date)
       }, 1000);
   }


   
   

    return (
        <div className="time">
            <span className="clock">{time}</span>
            <h1 className="phrase">Good {hours<12 && "Morning" || hours<18 && "Afternoon" || "Evening"} <span>Andrew</span></h1>
            <Search />
        </div>
    )
}

export default Time
