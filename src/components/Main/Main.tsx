import './Main.scss';
import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { url } from '../../utils/constants'
import Button from '@mui/material/Button';
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
  const data = useFetch(url, count);

  function debounce(callback: () => void, delay: number) {
    let timeout: number;
    return function () {
      //вызывается при каждом клике
      buttonRef.current += 1;
      clearTimeout(timeout);
      timeout = window.setTimeout(callback, delay);
    }
  }

  const debouncedButtonClick = debounce(() => setCount(buttonRef.current), 1000);

  return (
    <main className="content">      
      <Button 
        variant="contained"
        color="warning"
        onClick={debouncedButtonClick}
        disabled={data.loading}
      >
        {data.loading ? "Загрузка данных" : "Кликнуть"}
      </Button>
      <p className='title'>Кликнули {count} раз</p>
      <Answer loading={data.loading} data={data.data} error={data.error}/>
    </main>
  );
}

export default Main;
