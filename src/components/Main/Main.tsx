import './Main.scss';
import React, { useState, useEffect, useRef } from 'react';
import {useFetch} from '../../hooks/useFetch';
import Answer from '../Answer/Answer';

const Main = () => {

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

const buttonRef = useRef(0);
const [count, setCount] = useState(0);
const data = useFetch(count);

function debounce( callback:() => void, delay:number ) {
  let timeout: number;
  return function() {
    //вызывается при каждом клике
    buttonRef.current = buttonRef.current + 1;
    clearTimeout( timeout );
    timeout = window.setTimeout( callback, delay );
  }
}

const debouncedButtonClick = debounce(() => setCount(buttonRef.current), 1000);

return (
  <main className="content">
    <button className={!data.loading ? "button" : "button button_disabled" } onClick={debouncedButtonClick} disabled={data.loading}>{data.loading ? "Загрузка данных" :"Кликнуть"}</button>
    <p className='title'>Кликнули {buttonRef.current} раз</p>
    <Answer loading={data.loading} data={data.data} />
  </main>
);
}

export default Main;
