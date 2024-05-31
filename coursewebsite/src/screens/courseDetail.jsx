import React from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../assetes/courses.json'
import Navbar from '../components/Navbar';

function CourseDetail() {
  const { courseId } = useParams();
  const course = coursesData.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <div className="container mt-5"><h2>Course not found</h2></div>;
  }

  return (
    <div className="container">
        <Navbar/>
      <div className="row mt-5">
        <div className="col-md-8">
          <h2>{course.name}</h2>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p>{course.description}</p>
          <p><strong>Schedule:</strong> {course.schedule}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Location:</strong> {course.location}</p>
          <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
          <button className="btn btn-success">Enroll Now</button>
        </div>
        <div className="col-md-4">
          <img src={course.thumbnail} className="img-fluid" alt={course.name} />
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
