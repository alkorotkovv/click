import { useState, useEffect } from "react";
import { url } from '../utils/constants'
import { dataObject } from '../interfaces/interfaces'

export const useFetch = (count: number) => {

  const [data, setData] = useState<dataObject>({ loading: false, data: { ok: true, count: 0, error: "", error_ui: "" } })

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
        //console.log(res)
        setData({ loading: false, data: res });
      })
      .catch((error) => {
        setData({ loading: false });
        console.log("Ошибка")
      });
  }

  //Запрашиваем данные только если кликнули
  useEffect(() => {
    if (count) fetchData(url, count);
  }, [count]);


  return data;
};