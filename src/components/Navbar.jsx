import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to='/' >
      <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>
        netflix
        </h1>
      </Link>
   

    </div>
  )
}

export default Navbar
