import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import EventPage from './pages/EventPage'
import NewsPage from './pages/NewsPage'
import TeachersPage from './pages/TeachersPage'
import './pages/Homepage.scss'
import AboutTeachersPage from './pages/AboutTeachersPage'
import Dashboard from './pages/Dashboard'
import StaffSignUp from './pages/StaffSignUp'
import StaffSignIn from './pages/StaffSignIn'
import AccountTypePage from './pages/AccountTypePage'
import UserPage from './pages/UserPage'
import { useSelector } from 'react-redux'





function App() {
  const globalState = useSelector((state)=>state.portalReducer.firstName)
  console.log(globalState);
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

  let token = localStorage.token
  let username = "Adex"
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:username' element={username? <UserPage/> : <Navigate to="/*"/>}/>
        <Route path='/student_signin' element={<SignIn/>}/>
        <Route path='/student_signup' element={<SignUp/>}/>
        <Route path='/staff_dashboard' element={token ? <Dashboard/> : <Navigate to="/staff_signin"/>}/>
        <Route path='/staff_signup' element={<StaffSignUp/>}/>
        <Route path='/staff_signin' element={<StaffSignIn/>}/>
        <Route path='/account_type' element={<AccountTypePage/>}/>
        <Route path='/ourevent' element={<EventPage/>}/>
        <Route path='/ournews' element={<NewsPage/>}/>
        <Route path='/ourteachers' element={<TeachersPage/>}/>
        <Route path='/aboutThisTeacher' element={<AboutTeachersPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
    
    </>
  )
}

export default App
