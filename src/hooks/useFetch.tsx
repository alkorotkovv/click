import { useState, useEffect } from "react";

export const useFetch = (url:string, count:number) => {

  interface dataObject {
    loading?: boolean,
    data?: number,
    error?: string
  }

  const [data, setData] = useState<dataObject>({loading: false, data: 0, error: ""})

  function fetchData(url:string, count:number) {
    setData({ loading: true});
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData({ loading: false, data: res.data });
      })
      .catch((error) => {
        setData({ loading: false, data: count, error: "Ошибка"  });
      });
  }
  
  useEffect(() => {
    if (count) {
      console.log("делаем запрос")
      fetchData(url, count);
    }
  }, [url, count]);
  
  
  return data;
};