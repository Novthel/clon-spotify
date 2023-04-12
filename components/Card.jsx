import Image from 'next/image'
import React from 'react'
import { BsFillCaretRightFill } from "react-icons/bs";

export default function Card() {
  return (
    <section className='bg-spotify-backgroundCard p-4 rounded-lg hover:bg-spotify-backgroundCardHover transition-all group'>
        <div className='mb-4 relative'>
            <Image 
                src='https://thumbs.dreamstime.com/z/%C3%A1lbum-musical-46479118.jpg' 
                alt='album'
                width={160} 
                height={160}
                className='rounded drop-shadow-2xl mx-auto' 
            />
            <BsFillCaretRightFill  
            className='absolute bg-lime-600 text-2xl rounded-full p-3 box-content right-4 bottom-8 transition-all
            text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 ease-out'
            />
        </div>
        <div>
            <h5 className='mb-2 text-sm text-gray-100 font-bold'>Titulo Cancion</h5>
            <p className='text-gray-400 text-xs w-[18ch]'>description de la cancion y el artista del exito</p>
        </div>

    </section>
  )
}
