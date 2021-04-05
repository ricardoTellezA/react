//import React, { useState, useEffect } from 'react'
// import { GifExpertApp } from '../GifExpertApp';
//import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([])


const {data:images, loading} = useFetchGifs(category);
   

    




    return (

        <>
            <h3 className="animate__animated animate__zoomIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">loading</p>}
            <div className="card-grid">


                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img} />

                    ))
                }

            </div>
        </>

    )
}
