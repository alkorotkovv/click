import './Main.scss';
import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { url } from '../../utils/constants'
import { Button, Box, Typography, SvgIcon } from '@mui/material';
import Answer from '../Answer/Answer';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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

  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const data = useFetch(url, count);

  function debounce(callback: () => void, delay: number) {
    let timeout: number;
    return function () {
      //вызывается при каждом клике
      countRef.current += 1;
      clearTimeout(timeout);
      timeout = window.setTimeout(callback, delay);
    }
  };

  const debouncedButtonClick = debounce(() => setCount(countRef.current), 1000);

  return (
    <main className="content">
      <Button
        variant="contained"
        color="warning"
        sx={{ fontSize: 16, fontWeight: 700 }}
        onClick={debouncedButtonClick}
        disabled={data.loading}
      >
        {data.loading ? "Загрузка данных" : "Кликнуть"}
      </Button>
      <Box sx={{ display: "flex", gap: 1, flexDirection: 'row', fontWeight: 700 }}>
        <SvgIcon component={ErrorOutlineIcon} color="primary" />
        <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }} >
          Кликнули {count} раз
        </Typography>
      </Box>
      <Answer loading={data.loading} data={data.data} error={data.error} />
    </main>
  );
}

export default Main;
