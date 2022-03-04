//use... ->hooks empieza con use
//hooks son funciones

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
      data:[],
      loading:true
  });

  useEffect(()=>{
    getGifs(category)//Helper
    .then(imgs=>{
        setstate({//Dispara renderizacion
            data:imgs,
            loading:false
        });
    });

  },[category]);//Segundo paramentro es un arreglo de dependencias

  return state;//returna objeto {data,loading}
}
