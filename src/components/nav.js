import React, { useState } from 'react'

const Nav = () => {

    const [ menu, setMenu ] = useState(false);
    function openMenu(){
        if(menu === false){
            setMenu(!menu);
        }else(
            setMenu(!menu)
        )
    }
    const netflix = { url: "https://www.netflix.com"}
    const twitch = { url: "https://www.twitch.com"}
    const disneyplus = { url: "https://www.disneyplus.com"}
    const youtube = { url: "https://www.youtube.com"}

    return (
        <div className="nav">
            <div onClick={openMenu} className={menu ? "hamburger open": "hamburger"}>
                <div type="button" className={menu ? "hamburger-btn open": "hamburger-btn"} />
            </div>


            <div className={menu ? "navMenu open": "navMenu"}>
                <a rel={'noreferrer'} target="_blank" href={netflix.url}><img className="netflix" src={require("./images/netflix.png")} alt="netflix"/></a>
                <a rel={'noreferrer'} target="_blank" href={disneyplus.url}><img className="disneyplus" src={require("./images/disney_plus_logo_1820.jpg")} /></a>
                <a rel={'noreferrer'} target="_blank" href={youtube.url}><img className="youtube" src={require("./images/YouTube_full-color_icon_(2017).svg.png")} /></a>
                <a rel={'noreferrer'} target="_blank" href={twitch.url}><img className="twitch" src={require("./images/twitch.jpg")} /></a>
            </div>


        </div>
    )
}

export default Nav
