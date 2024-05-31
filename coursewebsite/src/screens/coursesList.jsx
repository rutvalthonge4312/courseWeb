import React, { useEffect, useState } from 'react';
import CourseCard from '../components/courseCard';
import dataFile from '../assetes/courses.json'

function CoursesList() {
  const [courses, setCourses] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <h1>Hey User ! Enroll in the Courses</h1>
        {dataFile.map(course => (
          <div key={course.id} className="col-md-4 mb-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
