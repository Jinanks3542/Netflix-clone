import React, { useState } from 'react'
import { createImageUrl } from '../services/movieServices';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { UserAuth } from '../context/authContext';
import {useNavigate} from 'react-router-dom'

function MovieItem({movie}) {
    const [like,setLike]=useState(false)
    const { user } = UserAuth()

    const navigate=useNavigate()

    const {title, backdrop_path,poster_path} = movie;

    const markFavShow = async()=>{
      const userEmail= user?.email;

      if(userEmail){
        const userDoc = doc(db,'users',userEmail)
        setLike(!like)
        await updateDoc(userDoc,{
          favShows: arrayUnion({...movie})
        })
      }
      else{
        alert ('Login to save a movie')
      }
    }

    const params = new URLSearchParams( ).toString()

  return (
    <div onClick={() => navigate(`/MovieTrailer/${params}`) } className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg
    overflow-hidden cursor-pointer m-2'>
      <img 
      className='w-full h-40 block object-cover object-top'
      src={createImageUrl(backdrop_path ?? poster_path, 'w500')} 
      alt={title} />

      <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
      <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-bold'>{movie.title}</p>
      <p onClick={markFavShow} className='cursor-pointer'>
        {like?(
          <FaHeart 
          size={20} 
          className='absolute top-2 left-2 text-gray-300' /> 
      )
      : (<FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300'/>)}

      </p>
      </div>
    </div>
  )
}

export default MovieItem
