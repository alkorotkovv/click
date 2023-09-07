import './Main.scss';
import React, { useState, useEffect, useRef } from 'react';
import {useFetch} from '../../hooks/useFetch';


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

const buttonRef = useRef(0);
const [count, setCount] = useState(0);
const [serverCount, setServerCount] = useState(55);
const data = useFetch(count);


useEffect(() => {
  console.log("поменялся ответ")
  if (data.data) {
    console.log("ne pusto")
    if (data.data.ok) {
      console.log("OK")
      const {ok, count} = data.data;      
      console.log(data.data)
      console.log(ok)
      console.log(count)
      setServerCount(count || 0)
    }
    else {
      console.log("NOTOK")
      const {ok, error, error_ui} = data.data;
      console.log(data.data)
      console.log(ok)
      console.log(error)
      console.log(error_ui)
    }
  }
  else console.log("Ошибка")
}
, [data])

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
    <p className='title title_yellow'>По версии сервера {serverCount} раз</p>
  </main>
);
}

export default Main;
