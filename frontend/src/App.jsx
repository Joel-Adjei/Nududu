import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Help from './Pages/Help'
import Login from './Pages/Login'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'


const App = () => {

  const islogin = false

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='Help' element={<Help />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='menu' element={<Menu islogin={islogin} />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    )
  )
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
