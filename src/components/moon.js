import React from 'react'

const moon = (props) => {
    return (
        <div>
            <div onClick={props.click} className="moon" />
        </div>
    )
}

export default moon
