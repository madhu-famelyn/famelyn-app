import React from "react";
import "./Courses.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import coursesData from "../../Data/coursesData";
import CoursesHeading from "./CourseHeading";
function Courses() {
  const navigate = useNavigate();

  return (
    <>
   
    <div className="app">
      {/* Hero Section */}
     <CoursesHeading/>

      {/* Course Grid */}
      <div className="course-container">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />

            <div className="card-content">
              <h3>{course.title}</h3>
              <p>{course.shortDescription}</p>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
                <span>{course.rating}</span>
              </div>

              <div className="card-footer">
                <h4>₹{course.price.toLocaleString()}</h4>

                <button
                  className="details-btn"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Courses;