import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Navbar from './components/Navbar'
import ErrorPage from './ErrorPage'
import NavigateTo from './components/NavigateTo'
import FixedNav from './components/FixedNav'
import SignIn from './SignIn'
import SignUp from './SignUp'
import EventPage from './EventPage'
import NewsPage from './NewsPage'
import Footer from './components/Footer'
import TeachersPage from './TeachersPage'
// import './Homepage.scss'



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
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/ourevent' element={<EventPage/>}/>
        <Route path='/ournews' element={<NewsPage/>}/>
        <Route path='/ourteachers' element={<TeachersPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
    
    </>
  )
}

export default App
