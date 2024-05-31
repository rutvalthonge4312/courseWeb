import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import 'bootstrap/dist/css/bootstrap.css';
import CourseDetail from './screens/courseDetail';
import AboutUs from './screens/aboutUs';
import StudentProfile from './screens/studentProfile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/profile" element={<StudentProfile/>} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
