import React from "react";
import { Link } from "react-router-dom";
import "./Resources.css";

export default function Resources() {
  const resources = [
    {
      title: "Education Pathways Guide",
      text: "Detailed information about educational routes including degrees, vocational training and certifications.",
      button: "Enlist Pathways",
      link: "/resources/EducationPathway",
    },
    {
      title: "Scholarship Opportunities",
      text: "List of scholarships and financial aid options for students.",
      button: "View List",
      link: "/resources/Scholarship",
    },
    {
      title: "Interview Preparation Guide",
      text: "Tips, common questions, and strategies to crack technical and HR interviews.",
      button: "Start Learning",
      link: "/resources/InterviewGuide",
    },
    {
      title: "Resume Building Kit",
      text: "Templates and guidance to build a professional resume that stands out.",
      button: "Build Now",
      link: "/resources/ResumeKit",
    },
  ];

  return (
    <div className="resources-page">
      <header className="resources-header">
        <h1>Student Resources</h1>
        <p>
          Everything you need to plan, prepare, and succeed in your career
          journey.
        </p>
      </header>

      <div className="resources-grid">
        {resources.map((item, index) => (
          <div className="resources-resource-card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>

            <Link className="resource-btn" to={item.link}>
              {item.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
