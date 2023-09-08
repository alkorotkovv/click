import { useState, useEffect } from "react";
import { dataObject } from '../interfaces/interfaces'

export const useFetch = (url: string, count: number) => {

  const [data, setData] = useState<dataObject>({ loading: false, data: { ok: true, count: 0, error: "", error_ui: "" }, error: "" })

  function fetchData(url: string, count: number) {
    setData({ loading: true });
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ZONT-Client': 'akorotkov95@mail.ru'
      },
      body: JSON.stringify({
        count: count
      })
    })
      .then((res) => res.json())
      .then((res) => {
        setData({ loading: false, data: res });
      })
      .catch((error) => {
        setData({ loading: false, error: error.message });
      });
  };

  //Запрашиваем данные только если кликнули
  useEffect(() => {
    count && fetchData(url, count);
  }, [count, url]);


  return data;
};