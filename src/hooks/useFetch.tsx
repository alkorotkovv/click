import { useState, useEffect } from "react";
import {url} from '../utils/constants'

export const useFetch = (count:number) => {

  interface result {
    ok?: boolean,
    count?: number,
    error?: string,
    error_ui?: string
  }
  
  interface dataObject {
    loading?: boolean,
    data?: result,
    error?: string
  }

  const [data, setData] = useState<dataObject>({loading: false, data: {ok: false, count: 0, error: "", error_ui: ""}, error: ""})

  function fetchData(url:string, count:number) {
    setData({ loading: true});
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
      setData({ loading: false, error: "Ошибка"  });
    });
  }
  
  useEffect(() => {
    if (count) fetchData(url, count);
  }, [count]);
  
  
  return data;
};