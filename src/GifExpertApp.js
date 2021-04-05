import React, { useState } from 'react'
import { AddCategories } from './categories/AddCategories';
import { GifGrid } from './categories/GifGrid';


export const GifExpertApp = () => {
   

    const [categories, setcategories] = useState(['One pus']);

    //  const handleAd = () =>{

    //     setcategories(["Naruto",...categories]);
       

    //  }
     

    

    return (
        <>
             <h2>GifExpert</h2>
             <AddCategories setcategories={setcategories}/>
             <hr/>
           

             <ol>
             {
                 categories.map(category => 
                      
                      <GifGrid key={category}
                      category={category}/>
                 )
             }
             </ol>

             

             
        </>
    )
}
