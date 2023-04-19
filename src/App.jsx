import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Navbar from './components/Navbar'
import ErrorPage from './ErrorPage'
import NavigateTo from './components/NavigateTo'



function App() {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', ()=> {
        navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        })
      })
    }
  },[])

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
