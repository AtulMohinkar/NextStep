import React from "react";
import { useParams } from "react-router-dom";
import "./Roadmap.css";

export default function Roadmap() {
  const { career } = useParams();

  const data = {
    "software-developer": {
      title: "Software Developer",
      skills: [
        "HTML, CSS, JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "DSA",
      ],

      steps: [
        "Learn Programming Basics",
        "Build Frontend Projects",
        "Practice DSA Regularly",
        "Learn Backend Development",
        "Create Full Stack Projects",
        "Apply for Jobs and Internships",
      ],
    },

    "creative-designer": {
      title: "Creative Designer",
      skills: [
        "Design Basics",
        "Figma",
        "UI/UX",
        "Prototyping",
      ],

      steps: [
        "Learn Design Principles",
        "Master Figma/Adobe XD",
        "Create a Portfolio",
        "Build Real UI Projects",
        "Apply for Design Roles",
      ],
    },

    "business-analyst": {
      title: "Business Analyst",
      skills: [
        "Excel",
        "SQL",
        "Data Analysis",
        "Communication",
      ],

      steps: [
        "Learn Business Concepts",
        "Master Excel and SQL",
        "Practice Data Analytics",
        "Create Reports and Dashboards",
        "Apply for Business Analyst Jobs",
      ],
    },

    "healthcare-professional": {
      title: "Healthcare Professional",
      skills: [
        "Biology",
        "Healthcare Knowledge",
        "Research",
      ],

      steps: [
        "Complete Required Education",
        "Gain Clinical Experience",
        "Improve Medical Skills",
        "Get Certifications",
        "Advance Your Career",
      ],
    },
  };

  const roadmap = data[career];

  // If roadmap does not exist
  if (!roadmap) {
    return (
      <div className="roadmap-container">
        <h1>Roadmap Not Found</h1>
        <p>No roadmap available for this career.</p>
      </div>
    );
  }

  return (
    <div className="roadmap-container">
      <h1>{roadmap.title} Roadmap</h1>

      <h2>Skills To Learn</h2>

      <ul>
        {roadmap.skills.map((skill, index) => (
          <li key={index}>✓ {skill}</li>
        ))}
      </ul>

      <h2>Steps to Follow</h2>

      <ul>
        {roadmap.steps.map((step, index) => (
          <li key={index}>
            {index + 1}. {step}
          </li>
        ))}
      </ul>
    </div>
  );
}