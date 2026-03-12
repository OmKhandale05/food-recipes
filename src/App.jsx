import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'

function App() {
  

  return (
    <div className='min-h-screen bg-grey-100'>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
