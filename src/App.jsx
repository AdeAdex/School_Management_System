import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Link, Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
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
import StudentCourseRegistration from './pages/Student/StudentCourseRegistration'
import ForgotPassword from './pages/Student/ForgotPassword'
import LoginAccountType from './pages/LoginAccountType'
import socketClient from 'socket.io-client';
import ChatModal from './components/studentDashboardComponents/ChatModal'
import Chat from './components/studentDashboardComponents/Chat'








function App() {
  let socketRef = useRef()
  const endpoint = "http://localhost:200"
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
    socketRef.current = socketClient(endpoint);
  },[])

  let staffSignInToken = localStorage.staffSignInToken
  let studentLoginToken = localStorage.studentLoginToken
  let studentSignInToken = localStorage.studentSignInToken
  let username = "Adex";
  let shouldRedirect = true;
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/:username' element={username? <UserPage/> : <Navigate to="/*"/>}/> */}
          {/* <Route path='/student_dashboard/chat' element={<ChatModal socket={socketRef}/>}/> */}
          {/* <Route path='edit_details' element={<StudentEditDetails socket={socketRef}/>} />   */}

          {/* <Route path='/chat' element={<Chat socket={socketRef}/>} />   */}


        <Route path='/student_signin' element={<StudentSignIn/>}/>
        <Route path='/student' element={shouldRedirect ? <Navigate to="/student/create_account"/> : <StudentSignUp/>}/>
        <Route path='/student/*' element={ <StudentSignUp/>}>   {/* studentLoginToken ?   : <Navigate to="/student_login"/> */}
          <Route path='create_account' element={<CreateAccount/>}/>
          <Route path='admission' element={shouldRedirect ? <Navigate to="student/admission/pick_class"/> : <Admission/>}/>
          <Route path='admission/*' element={shouldRedirect ?  <Navigate to="student/admission/pick_class"/> : <Navigate to="/student_login"/>}>
            <Route path='pick_class' element={<PickClass/>}/>
            <Route path='payment' element={<Payment/>} />
            <Route path='personal_information' element={<PersonalInformation/>} />
            <Route path='education' element={<Education/>} />
            <Route path='referees' element={<Referees/>} />
          </Route>
        </Route>
        <Route path='/forgot_password' element={<ForgotPassword/>}/>
        <Route path='student_login' element={<Login/>}/>
        <Route path='student_dashboard' element={shouldRedirect ? <Navigate to="/student_dashboard/home"/> : <StudentPortalDashboard/>}/>
        <Route path='/student_dashboard/*' element={studentSignInToken ? <StudentPortalDashboard/> : <Navigate to="/student_signin"/>}>
          <Route path='home' element={<StudentDashboardHome/>}/>
          <Route path='profile' element={<StudentProfile/>} />
          <Route path='change_password' element={<StudentChangePassword/>} />
          <Route path='edit_details' element={<StudentEditDetails socket={socketRef}/>} />  
          <Route path='course_registration' element={<StudentCourseRegistration/>} />
          {/* <Route path='chat' element={<ChatModal socket={socketRef}/>}/> */}
        </Route>
            
        
        <Route path='/staff_dashboard' element={staffSignInToken ? <Dashboard/> : <Navigate to="/staff_signin"/>}>
          <Route path='home' element={<StaffDashboardHome/>} />
          <Route path='profile' element={<StaffProfile/>}/>
          <Route path='change_password' element={<StaffChangePassword/>}/>
          <Route path='edit_details' element={<StaffEditDetails/>}/>
        </Route>
        <Route path='/staff_signup' element={<StaffSignUp/>}/>
        <Route path='/staff_signin' element={<StaffSignIn/>}/>
        <Route path='/account_type' element={<AccountTypePage/>}/>
        <Route path='/login_account_type' element={<LoginAccountType/>}/>
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
