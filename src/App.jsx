import React from 'react'
// style.css
import "./assets/css/style.css"
// home page
import Home from './pages/home.jsx'
import Blog from './pages/blog.jsx'
import Company from './pages/company.jsx'
import Features from './pages/Features.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
// react router
import { Route , Routes } from 'react-router'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} errorElement={<h1 style={{color:"red"}}>404</h1>}/>
        <Route path='/Company' element={<Company/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/*' element={ <h1 style={{color:"red"}}>404</h1>}/>
        
      </Routes>
    </>
  )

}

export default App
