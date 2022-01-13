import './App.css';
import Time from './time.js';
import Nav from './nav';
import Night from './night';
import { useState } from 'react';
import Moon from './moon.js';

function App() {
  const [ night, setNight ] = useState(false)
  function nightTime(){
    setNight(!night)
  }
  return (
    <div className="App">
      <Night night={night} />
      <Moon click={nightTime} />
      <Nav />
      <Time />
    </div>
  );
}

export default App;
