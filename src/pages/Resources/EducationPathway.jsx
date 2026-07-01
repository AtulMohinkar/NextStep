import React from "react";
import { Link } from "react-router-dom";
import "./EducationPathway.css";

export default function EducationPathway() {
  return (
    <div className="education-container">
      <h1>Education Pathway Guide</h1>

      <div className="education-card">
        <h2>After 10th</h2>
        <p>Choose Science, Commerce, Arts or Diploma.</p>
      </div>

      <div className="education-card">
        <h2>After 12th</h2>
        <p>B.Tech, BCA, BSc, BBA, MBBS and many other options.</p>
      </div>

      <div className="education-card">
        <h2>Higher Studies</h2>
        <p>M.Tech, MBA, MS, PhD, Professional Certifications.</p>
      </div>
    </div>
  );
}