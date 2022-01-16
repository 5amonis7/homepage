import React from 'react'

const Shows = () => {

    // Shows displayed onto the navbar
    const netflix = { url: "https://www.netflix.com"}
    const twitch = { url: "https://www.twitch.com"}
    const disneyplus = { url: "https://www.disneyplus.com"}
    const youtube = { url: "https://www.youtube.com"}

    return (
        <div className='showsMenu'>

            <p className="shows">Shows</p>
                <hr className="shows-line" />
                <div className="group1">
                    <a rel="noreferrer" target="_blank" href={youtube.url}><img className="youtube" src={require("./images/youtube.png")} alt="youtube" /></a>
                    <a rel="noreferrer" target="_blank" href={disneyplus.url}><img className="disneyplus" src={require("./images/disney .png")} alt="disney plus" /></a>
                </div>
                <div className="group2">
                    <a rel="noreferrer" target="_blank" href={netflix.url}><img className="netflix" src={require("./images/netflix.png")} alt="netflix" /></a>
                    <a rel="noreferrer" target="_blank" href={twitch.url}><img className="twitch" src={require("./images/twitch.png")} alt="twitch" /></a>
                </div>
        
            
        </div>
    )
}

export default Shows
