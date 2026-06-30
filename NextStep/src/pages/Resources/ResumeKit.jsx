import React from "react";
import { Link } from "react-router-dom";
import "./ResumeKit.css";

export default function ResumeKit() {
  return (
    <div className="resume-container">
      <h1>Resume Building Kit</h1>

      <div className="resume-card">
        <h2>Resume Sections</h2>
        <ul>
          <li>Personal Information</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Experience</li>
        </ul>
      </div>

      <div className="resume-card">
        <h2>Important Tips</h2>
        <ul>
          <li>Keep resume within 1 page.</li>
          <li>Use action verbs.</li>
          <li>Highlight achievements.</li>
        </ul>
      </div>
    </div>
  );
}