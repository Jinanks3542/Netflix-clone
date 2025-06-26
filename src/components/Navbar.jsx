import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

function Navbar() {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout= async ()=>{
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='fixed top-0 left-0 w-full p-4 z-50 flex items-center justify-between'>
      <Link to='/'>
        <h1 className='uppercase font-nsans-Bold cursor-pointer text-5xl text-red-600'>
          netflix
        </h1>
      </Link>

    {
      user?.email ?(
         <div>
        <Link to='/Profile'>
          <button className='capitalize pr-4 text-white'>Profile</button>
        </Link>
        
          <button onClick={handleLogout} className='capitalize px-4 py-2 bg-red-600 rounded text-white'>
            Logout
          </button>
      </div>
      ):
      (
         <div>
        <Link to='/login'>
          <button className='capitalize pr-4 text-white'>login</button>
        </Link>
        <Link to='/signup'>
          <button className='capitalize px-4 py-2 bg-red-600 rounded text-white'>
            sign up
          </button>
        </Link>
      </div>
      )
    }


    </div>
  )
}

export default Navbar

