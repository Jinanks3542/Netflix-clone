import React from 'react'
import { UserAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {user} = UserAuth()
    if(!user){
        return <Navigate to='/' />
    }
    
  return children
}
export default ProtectedRoute
