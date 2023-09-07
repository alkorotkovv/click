import './Main.scss';
import React, { useState, useEffect, useRef } from 'react';

const Main: React.FC = () => {

//Другая реализация
/*
const [seconds, setSeconds] = useState(0);
const [count, setCount] = useState(0);
const [newClicked, setNewClicked] = useState(Date.now());

useEffect(() => {
  const timer = setInterval(() => {
    setSeconds(seconds + 100);
  }, 100);
  return () => clearInterval(timer);
});

useEffect(() => {
  if (count) {
    if ((Date.now() > (newClicked + 1000))) {
      setIsAllow(false);
    }
    else {
      setIsAllow(true);
    }
  }
}, [seconds])

//Обработчик клика на кнопку
function handleButtonClick() {
  setCount(count + 1);
  setNewClicked(Date.now());
}
*/

const [isAllow, setIsAllow] = useState(true);
const buttonRef = useRef(0);


function debounce( callback:() => void, delay:number ) {
  let timeout: number;
  return function() {
    //вызывается при каждом клике
    buttonRef.current = buttonRef.current + 1;
    clearTimeout( timeout );
    timeout = window.setTimeout( callback, delay );
  }
}

const debouncedButtonClick = debounce(() => setIsAllow(false), 1000);


return (
  <main className="content">
    <button className={isAllow ? "button" : "button button_disabled" } onClick={debouncedButtonClick} disabled={!isAllow}>Кликнуть</button>
    <p className='title'>Кликнули {buttonRef.current} раз</p>
    <p className='title title_yellow'>По версии сервера 10 раз</p>
  </main>
);
}

export default Main;
