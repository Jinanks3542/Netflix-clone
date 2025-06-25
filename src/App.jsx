import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'




function App() {
  return (
<>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/profile' element={<Profile />} />
      
    </Routes>

</>
  )
}

export default App


 