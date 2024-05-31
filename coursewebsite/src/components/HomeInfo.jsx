import React from 'react'
import img from '../assetes/homeImage.png'
function HomeInfo() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 p-3">
          <h2 className='my-4'>Digital Courses Made for Digital Students</h2>
          <p className='my-4'>Explore a wide range of courses designed to help you master new skills and advance your career. Join a community of learners and take the next step in your educational journey.</p>
          <button className='btn btn-success rounded w-100'>Enroll Now!</button>
        </div>
        <div className="col-md-6 p-3">
          <img className='img-fluid' src={img} alt="Course Image" />
        </div>
      </div>
    </div>
  );
}

export default HomeInfo