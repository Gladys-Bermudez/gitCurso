import React,{useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
//useEffect -> codigo de manera condicional
export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([])
    
    useEffect(()=>{
        //Se ejecuta cuando se renderiza por primera vez
        getGifs();
    }, [])//Segundo parametro es un arreglo de dependencias
    
    const getGifs=async()=>{
        const url='https://api.giphy.com/v1/gifs/search?q=Pokemon&limit=10&api_key=M5tTHY9MvilJIoviPSSum2UrdNmEA5n6';
        const resp=await fetch(url);
        const {data}= await resp.json();
        const gifs= data.map(img=>{
            return {
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setImages(gifs);
    }
  return (
    <div>
        <h3>{category}</h3>
        
        {
            images.map(img=>(

                <GifGridItem 
                    key={img.id}
                    {...img} 
                />
            ))
        }
    
    </div>
  )
}
