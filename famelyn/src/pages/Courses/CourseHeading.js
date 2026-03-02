
import React from "react";
import "./CourseHeading.css";

const CoursesHeading = () => {
  const stats = [
    { value: "10K+", label: "Books Sold" },
    { value: "5K+", label: "Followers" },
    { value: "15K+", label: "Reviews" },
  ];

  return (
    <section className="courses">
      <div className="courses-container">
        <h2 className="courses-title">Courses</h2>

        <div className="stats-wrapper">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3 className="stat-value">{item.value}</h3>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesHeading;