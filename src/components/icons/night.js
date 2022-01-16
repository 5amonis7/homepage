import React from 'react'

const night = (props) => {
    return (
        <div className="night">
            <div className={props.night ? "nightmode on": "nightmode off"} />
        </div>
    )
}

export default night
