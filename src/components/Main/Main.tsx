import './Main.scss';
import React, { useState, useEffect } from 'react';

const Main: React.FC = () => {

const [count, setCount] = useState(0);
const [allow, setAllow] = useState(true);
const [k, setK] = useState(0);
const [lastClicked, setLastClicked] = useState(Date.now());
const [newClicked, setNewClicked] = useState(Date.now());

//const timerId: number = window.setInterval(() => console.log(k), 1000);
//window.setInterval(() => console.log(k), 1000);

const [seconds, setSeconds] = useState(1);

useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(seconds + 100);
  }, 100);
  return () => clearInterval(timer);
});

useEffect(() => {
  console.log("seconds " + seconds)
  console.log("last " + lastClicked)
  console.log("new  " + newClicked)
  if (k) {
    if ((Date.now() > (newClicked + 1000))) {
      setAllow(false);
    }
    else {
      setAllow(true);
    }
  }
}, [seconds])

useEffect(() => {
  //console.log("k " + k)
}, [k])

useEffect(() => {
  //console.log("last " + lastClicked)

}, [lastClicked])

useEffect(() => {
  //console.log("new  " + newClicked)

}, [newClicked])


function onTimer() {
  //console.log(k)
  //console.log("last " + lastClicked)
  //console.log("now " + newClicked)
}


function handleButtonClick() {

  if (k === 0) {
    setLastClicked(Date.now());
    setNewClicked(Date.now());
  }
  else {
    setLastClicked(newClicked);
    setNewClicked(Date.now());
  }

  setCount(count + 1);
  setK(k+1);
}

return (
  <main className="content">
    <button className={allow ? "button" : "button button_disabled" } onClick={handleButtonClick} disabled={!allow}>Кликнуть</button>
    <p className='title'>Кликнули {count} раз</p>
    <p className='title title_yellow'>По версии сервера 10 раз</p>
  </main>
);
}

export default Main;
