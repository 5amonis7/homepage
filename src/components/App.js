import './App.css';
import Time from './main/time.js';
import Nav from './nav/nav';
import Night from './icons/night';
import { useState } from 'react';
import Moon from './icons/moon.js';
import Hamburger from './icons/hamburger'


function App() {

  // Changing nightmode on or off
  const [ night, setNight ] = useState(false)
  function nightTime(){
    setNight(!night)
  }

  // Showing or hiding the menu
  const [ menu, setMenu ] = useState(false);
    function openMenu(){
        if(menu === false){
            setMenu(!menu);
        }else(
            setMenu(!menu)
        )
    }

  return (
    <div className="App">
      {/* Nightmode */}
      <Night night={night} />
      {/* Moon icon */}
      <Moon click={nightTime} />
      {/* Hamburger icon */}
      <Hamburger click={openMenu} menu={menu} />
      {/* Navbar */}
      <Nav menu={menu} />
      {/* Middle content */}
      <Time />
    </div>
  );
}

export default App;
