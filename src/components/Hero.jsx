import React, { useEffect, useState } from 'react'
import endpoints, { createImageUrl } from '../services/movieServices'
import axios from 'axios'

const Hero = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]
      setMovie(randomMovie)
    })
  }, [])

  const truncate = (str, length) => {
    if (!str) return ''
    return str.length > length ? str.slice(0, length) + '...' : str
  }

  const { title, backdrop_path, release_date, overview } = movie

  return (
    <div className="w-full h-[550px] lg:h-[850px] relative overflow-hidden">
      <img
        className="w-full h-full object-cover object-top"
        src={createImageUrl(backdrop_path,'original')}

        alt={title}
      />
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black"></div>

      {/* Text content */}
      <div className="absolute w-full top-[30%] p-4 md:p-8 z-10">
        <h1 className="text-3xl md:text-6xl font-nsans-bold text-white">{title}</h1>
        <div className="mt-8 mb-4">
          <button className="capitalize border bg-gray-300 text-black py-2 px-5 mr-4">play</button>
          <button className="capitalize border border-gray-300 py-2 px-5 text-white">watch later</button>
        </div>
        <p className="text-gray-400 text-sm mb-2">{release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">{truncate(overview, 165)}</p>
      </div>
    </div>
  )
}

export default Hero


