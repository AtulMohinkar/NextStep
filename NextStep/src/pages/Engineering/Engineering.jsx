import React, { useState } from "react";
import "./Engineering.css";

export default function EngineeringCareer() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <main className="software-main">
        <div className="software-container">
          <h1 className="software-page-title">Engineering Career</h1>

          <div className="software-career-detail">
            <div className="software-career-header">
              <img src={"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"}  />
              <h2>Engineering Careers</h2>
            </div>

            <h3>Overview</h3>
            <p>
              Engineers solve real-world problems using science, mathematics,
              and technology. They design, develop, and maintain systems,
              machines, and infrastructure.
            </p>

            <h3>Education Path</h3>
            <ul>
              <li>B.Tech / B.E. in relevant specialization</li>
              <li>Diploma in Engineering</li>
              <li>M.Tech / MS for higher studies</li>
              <li>Industry Certifications</li>
            </ul>

            <h3>Required Skills</h3>
            <ul>
              <li>Mathematics & Analytical Thinking</li>
              <li>Problem Solving</li>
              <li>Technical Knowledge</li>
              <li>Communication Skills</li>
              <li>Teamwork</li>
            </ul>

            <h3>Career Prospects</h3>
            <p>
              Engineering offers excellent career opportunities in various
              sectors including IT, manufacturing, civil, and electronics.
            </p>

            <ul>
              <li>Entry Level: ₹3 LPA - ₹6 LPA</li>
              <li>Mid Level: ₹6 LPA - ₹12 LPA</li>
              <li>Senior Level: ₹12 LPA - ₹25 LPA+</li>
            </ul>

            <h3>Career Paths</h3>
            <ul>
              <li>Software Engineer</li>
              <li>Civil Engineer</li>
              <li>Mechanical Engineer</li>
              <li>Electrical Engineer</li>
              <li>Electronics Engineer</li>
              <li>Automation Engineer</li>
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
