import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Navigate, Route, BrowserRouter as Router, Routes, redirect} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/Staff/SignIn'
import SignUp from './pages/Staff/SignUp'
import EventPage from './pages/EventPage'
import NewsPage from './pages/NewsPage'
import TeachersPage from './pages/TeachersPage'
import './pages/Homepage.scss'
import AboutTeachersPage from './pages/AboutTeachersPage'
import Dashboard from './pages/Staff/Dashboard'
import StaffSignUp from './pages/Staff/StaffSignUp'
import StaffSignIn from './pages/Staff/StaffSignIn'
import AccountTypePage from './pages/AccountTypePage'
import UserPage from './pages/UserPage'
import { useSelector } from 'react-redux'
import StaffProfile from './pages/Staff/StaffProfile'
import StaffChangePassword from './pages/Staff/StaffChangePassword'
import StaffDashboardHome from './pages/Staff/StaffDashboardHome'
import StaffEditDetails from './pages/Staff/StaffEditDetails'
import PickClass from './pages/Student/PickClass'
import PersonalInformation from './pages/Student/PersonalInformation'
import CreateAccount from './pages/Student/CreateAccount'
import Admission from './pages/Student/Admission'
import Payment from './pages/Student/Payment'
import Education from './pages/Student/Education'
import Referees from './pages/Student/Referees'
import Login from './pages/Student/Login'
import StudentSignIn from './pages/Student/StudentSignIn'
import StudentSignUp from './pages/Student/StudentSignUp'
import StudentPortalDashboard from './pages/Student/StudentPortalDashboard'
import StudentDashboardHome from './pages/Student/StudentDashboardHome'
import StudentProfile from './pages/Student/StudentProfile'
import StudentChangePassword from './pages/Student/StudentChangePassword'
import StudentEditDetails from './pages/Student/StudentEditDetails'






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
  let studentToken = localStorage.studentToken
  let username = "Adex";
  let shouldRedirect = true;
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:username' element={username? <UserPage/> : <Navigate to="/*"/>}/>

        <Route path='/student_signin' element={<StudentSignIn/>}/>
        <Route path='/student/*' element={ <StudentSignUp/>}>
          <Route path='create_account' element={<CreateAccount/>}/>
          <Route path='admission/*' element={<Admission/>}>
            <Route path='pick_class' element={<PickClass/>}/>
            <Route path='payment' element={<Payment/>} />
            <Route path='personal_information' element={<PersonalInformation/>} />
            <Route path='education' element={<Education/>} />
            <Route path='referees' element={<Referees/>} />
          </Route>
        </Route>
        <Route exact path='/student' element={shouldRedirect ? <Navigate to="/student/create_account"/> : <SignUp/>}/>
        <Route path='student_login' element={<Login/>}/>
        <Route path='/student_dashboard/*' element={studentToken ? <StudentPortalDashboard/> : <Navigate to="/student_signin"/>}>
          <Route path='student_home' element={<StudentDashboardHome/>}/>
          <Route path='student_profile' element={<StudentProfile/>} />
          <Route path='student_change_password' element={<StudentChangePassword/>} />
          <Route path='student_edit_details' element={<StudentEditDetails/>} />
        </Route>
            
        
        <Route path='/staff_dashboard' element={token ? <Dashboard/> : <Navigate to="/staff_signin"/>}>
          <Route path='home' element={<StaffDashboardHome/>} />
          <Route path='profile' element={<StaffProfile/>}/>
          <Route path='change_password' element={<StaffChangePassword/>}/>
          <Route path='edit_details' element={<StaffEditDetails/>}/>
        </Route>
        <Route path='/staff_signup' element={<StaffSignUp/>}/>
        <Route path='/staff_signin' element={<StaffSignIn/>}/>
        <Route path='/account_type' element={<AccountTypePage/>}/>
        <Route path='/ourevent' element={<EventPage/>}/>
        <Route path='/ournews' element={<NewsPage/>}/>
        <Route path='/ourteachers' element={<TeachersPage/>}/>
        <Route path='/aboutThisTeacher' element={<AboutTeachersPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
