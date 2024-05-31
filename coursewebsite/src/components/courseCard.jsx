import React from 'react';
import { useNavigate } from 'react-router-dom';

function CourseCard({ course }) {
    const nevigate=useNavigate();
    console.log(course.thumbnail);
    return (
      <div className="card rounded shadow p-1 border border-none" style={{ width: '25rem' }}>
        <img src={(course.thumbnail)} className="card-img-top" alt={course.name} />
        <div className="card-body">
          <h5 className="card-title m-1">{course.name}</h5>
          <p className="card-text m-1">{course.description}</p>
          <p className="card-text m-1"><small className="text-muted">Instructor: {course.instructor}</small></p>
          <p className="card-text m-1"><small className="text-muted">Duration: {course.duration}</small></p>
          <p className="card-text m-1"><small className="text-muted">Schedule: {course.schedule}</small></p>
          <button className="btn btn-primary"
            onClick={()=>{
                nevigate(`/courses/${course.id}`)
            }}
          >Enroll Now</button>
        </div>
      </div>
    );
  }

export default CourseCard;
