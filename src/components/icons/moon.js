import React from 'react'

const moon = (props) => {
    return (
        <div className="moon">
            <div onClick={props.click}  className="moon-button" />
        </div>
    )
}

export default moon
