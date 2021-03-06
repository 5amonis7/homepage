import React from 'react'

const hamburger = (props) => {



    return (
        <div onClick={props.click} className={props.menu ? "hamburger open": "hamburger"}>
            <div type="button" className={props.menu ? "hamburger-btn open": "hamburger-btn"} />
        </div> 
    )
}

export default hamburger
