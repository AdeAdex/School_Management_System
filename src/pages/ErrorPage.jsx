import React from 'react'
import PagesNavbar from '../components/PagesNavbar'

const ErrorPage = () => {
  return (
    <>
    <PagesNavbar/>
    <div className='text-danger text-center' style={{marginTop: '200px'}}>This is an ErrorPage</div>
    </>
  )
}

export default ErrorPage