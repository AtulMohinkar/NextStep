import React from "react";
import { Link } from "react-router-dom";
import "./InterviewGuide.css";

export default function InterviewGuide() {
  return (
    <div className="interview-container">
      <h1>Interview Preparation Guide</h1>

      <div className="guide-card">
        <h2>Technical Interview Tips</h2>
        <ul>
          <li>Practice DSA regularly.</li>
          <li>Revise core subjects.</li>
          <li>Work on projects thoroughly.</li>
        </ul>
      </div>

      <div className="guide-card">
        <h2>HR Interview Questions</h2>
        <ul>
          <li>Tell me about yourself.</li>
          <li>Why should we hire you?</li>
          <li>Where do you see yourself in 5 years?</li>
        </ul>
      </div>
    </div>
  );
}