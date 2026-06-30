import React, { useState } from "react";
import "./Teaching.css";

export default function TeachingCareer() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <main className="software-main">
        <div className="software-container">
          <h1 className="software-page-title">Teaching Career</h1>

          <div className="software-career-detail">
            <div className="software-career-header">
              <img src={ "https://plus.unsplash.com/premium_photo-1661380797814-d0bcc01342b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D"}  />
              <h2>Teaching & Education Careers</h2>
            </div>

            <h3>Overview</h3>
            <p>
              Teachers educate, mentor, and inspire students. The profession
              plays a vital role in shaping future generations.
            </p>

            <h3>Education Path</h3>
            <ul>
              <li>B.Ed after Graduation</li>
              <li>D.Ed / Diploma in Education</li>
              <li>M.Ed for advanced studies</li>
              <li>Teaching Eligibility Tests (CTET/TET)</li>
            </ul>

            <h3>Required Skills</h3>
            <ul>
              <li>Communication Skills</li>
              <li>Patience</li>
              <li>Leadership</li>
              <li>Subject Knowledge</li>
              <li>Classroom Management</li>
            </ul>

            <h3>Career Prospects</h3>
            <p>
              Teaching offers stable career opportunities in schools,
              colleges, coaching institutes, and online education platforms.
            </p>

            <ul>
              <li>Entry Level: ₹2.5 LPA - ₹5 LPA</li>
              <li>Mid Level: ₹5 LPA - ₹8 LPA</li>
              <li>Senior Level: ₹8 LPA - ₹15 LPA+</li>
            </ul>

            <h3>Career Paths</h3>
            <ul>
              <li>School Teacher</li>
              <li>Professor</li>
              <li>Online Educator</li>
              <li>Academic Counselor</li>
              <li>Principal</li>
              <li>Education Consultant</li>
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