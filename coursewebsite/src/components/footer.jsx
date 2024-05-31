import React from 'react';

function Footer() {
  return (
    <footer className=" mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>Learn more about our mission, vision, and the team behind CourseHub.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted">Home</a></li>
              <li><a href="/courses" className="text-muted">Courses</a></li>
              <li><a href="/about" className="text-muted">About</a></li>
              <li><a href="/contact" className="text-muted">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@coursehub.com</p>
            <p>Phone: +1 234 567 890</p>
            <div>
              <a href="https://facebook.com" className="text-white me-2"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-white me-2"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" className="text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy; 2024 CourseHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
