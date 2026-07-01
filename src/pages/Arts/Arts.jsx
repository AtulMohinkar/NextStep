import React, { useState } from "react";
import "./Arts.css";

export default function ArtsCareer() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <main className="software-main">
        <div className="software-container">
          <h1 className="software-page-title">Arts Career</h1>

          <div className="software-career-detail">
            <div className="software-career-header">
              <img src={ "https://plus.unsplash.com/premium_photo-1677626249249-86e07cdb1a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydHMlMjBhbmQlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"}  />
              <h2>Arts & Creative Careers</h2>
            </div>

            <h3>Overview</h3>
            <p>
              Arts careers focus on creativity, communication, design, and
              expression. Students can pursue careers in media, design,
              literature, and social sciences.
            </p>

            <h3>Education Path</h3>
            <ul>
              <li>BA in Arts, Literature, Psychology, etc.</li>
              <li>BFA (Bachelor of Fine Arts)</li>
              <li>Mass Communication Courses</li>
              <li>Professional Certifications</li>
            </ul>

            <h3>Required Skills</h3>
            <ul>
              <li>Creativity</li>
              <li>Communication Skills</li>
              <li>Critical Thinking</li>
              <li>Writing & Presentation Skills</li>
              <li>Research Skills</li>
            </ul>

            <h3>Career Prospects</h3>
            <p>
              Arts graduates have diverse career opportunities in media,
              education, design, public services, and content creation.
            </p>

            <ul>
              <li>Entry Level: ₹2.5 LPA - ₹5 LPA</li>
              <li>Mid Level: ₹5 LPA - ₹10 LPA</li>
              <li>Senior Level: ₹10 LPA - ₹20 LPA+</li>
            </ul>

            <h3>Career Paths</h3>
            <ul>
              <li>Journalist</li>
              <li>Content Writer</li>
              <li>Graphic Designer</li>
              <li>Psychologist</li>
              <li>Social Worker</li>
              <li>Public Relations Officer</li>
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
