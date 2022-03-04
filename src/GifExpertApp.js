import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{
    //const categories=['One Punch','Samurai X', 'Pokemon']
    const [categories, setCategories] = useState(['Doraemon']);
/*
    const handleAdd=()=>{
        setCategories([...categories,'Heidy']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={setCategories}/> 
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>  
    );
}
export default GifExpertApp;