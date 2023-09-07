import './Main.scss';
import React, { useState, useEffect, useRef } from 'react';
import {useFetch} from '../../hooks/useFetch';
import {url} from '../../utils/constants'

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
const [serverCount, setServerCount] = useState(55);
const data = useFetch(url, buttonRef.current);
console.log(data)


React.useEffect(() => {
  console.log("поменялся ответ")
  setIsAllow(data.loading || true)
}, [data])

function debounce( callback:() => void, delay:number ) {
  //console.log("последний")
  let timeout: number;
  return function() {
    //вызывается при каждом клике
    buttonRef.current = buttonRef.current + 1;
    clearTimeout( timeout );
    timeout = window.setTimeout( callback, delay );
  }
}

const debouncedButtonClick = debounce(() => {
  setIsAllow(false)
}, 1000);












return (
  <main className="content">
    <button className={!data.loading ? "button" : "button button_disabled" } onClick={debouncedButtonClick} disabled={data.loading}>Кликнуть</button>
    <p className='title'>Кликнули {buttonRef.current} раз</p>
    <p className='title title_yellow'>По версии сервера {serverCount} раз</p>
  </main>
);
}

export default Main;
