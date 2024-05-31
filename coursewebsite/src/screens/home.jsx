import React from 'react'
import Navbar from '../components/Navbar'
import HomeInfo from '../components/HomeInfo'
import CoursesList from './coursesList'
import Footer from '../components/footer'

function home() {
  return (
    <div className="container">
       <Navbar/>
       <HomeInfo/>
       <CoursesList/>
       <Footer/>
    </div>
  )
}

export default home