import React, { useState } from "react";
import "./Software.css";

export default function SoftwareCareer() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* MAIN */}
      <main className="software-main">
        <div className="software-container">
          <h1 className="software-page-title">Software Development Career</h1>

          <div className="software-career-detail">
            <div className="software-career-header">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Software Development"
              />
              <h2>Software Development & IT Careers</h2>
            </div>

            <h3>Overview</h3>
            <p>
              Software developers design, code, test, and maintain software applications.
              They work across industries building apps, websites, and systems.
            </p>

            <h3>Education Path</h3>
            <ul>
              <li>Bachelor’s in CS / IT / Software Engineering</li>
              <li>Coding Bootcamps / Online Courses</li>
              <li>Certifications (AWS, Azure, Google Cloud)</li>
              <li>Continuous learning</li>
            </ul>

            <h3>Required Skills</h3>
            <ul>
              <li>Programming: JavaScript, Python, Java, C++</li>
              <li>DSA & Problem Solving</li>
              <li>Databases & APIs</li>
              <li>Git & Version Control</li>
              <li>Team communication</li>
            </ul>

            <h3>Career Prospects</h3>
            <p>
              High demand globally with strong salary growth across all levels.
            </p>

            <ul>
              <li>Entry: $60k - $80k</li>
              <li>Mid: $80k - $120k</li>
              <li>Senior: $120k - $180k+</li>
              <li>AI/ML roles: $200k+</li>
            </ul>

            <h3>Career Paths</h3>
            <ul>
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Full Stack Developer</li>
              <li>Mobile App Developer</li>
              <li>DevOps Engineer</li>
              <li>Data Scientist</li>
            </ul>

            <div className="software-buttons">
              <a className="software-btn-secondary" href="/careers">
                Back to Careers
              </a>
              <a className="software-btn" href="/assessment">
                Take Career Assessment
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}