import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'

function App() {
  

  return (
    <div className='min-h-screen bg-grey-100 flex flex-col'>
      <Navbar/>
      <div className='flex-grow'>
      <AppRouter/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App
