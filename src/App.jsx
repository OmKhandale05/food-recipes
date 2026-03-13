import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <div className='min-h-screen bg-grey-100 flex flex-col'>
      <Navbar/>
      <div className='flex-grow'>
      <AppRouter/>
      </div>
      
      <Footer/>
      <ToastContainer position='bottom-right' autoClose={2000}/>
    </div>
  )
}

export default App
