import React from 'react';
import studentData from '../assetes/student.json'
import coursesData from '../assetes/courses.json'
import Navbar from '../components/Navbar';

function StudentProfile() {
  const student = studentData;

  const enrolledCourses = student.enrolledCourses.map(courseId =>
    coursesData.find(course => course.id === courseId)
  );

  return (
    <div className="container">
        <Navbar/>
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={student.profilePicture} className="img-fluid rounded-circle" alt={student.name} />
        </div>
        <div className="col-md-8">
          <h2>{student.name}</h2>
          <p><strong>Email:</strong> {student.email}</p>
          <h3 className="mt-4"><strong>Enrolled Courses</strong></h3>
          <ul className="list-group">
            {enrolledCourses.map(course => (
              <card key={course.id} className="list-group-item m-2 p-3 rounded shadow">
                <img src={course.thumbnail} alt="" className='w-50' />
                <h5>{course.name}</h5>
                <p>{course.description}</p>
                <p><strong>Instructor:</strong> {course.instructor}</p>
              </card>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
