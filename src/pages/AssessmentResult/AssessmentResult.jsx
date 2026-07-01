import React from "react";
import { Link } from "react-router-dom";
import "./AssessmentResult.css";

export default function AssessmentResult() {
  const answers = JSON.parse(localStorage.getItem("assessmentAnswers")) || {};

  const calculateCareer = () => {
    const values = Object.values(answers);

    if (values.length === 0) {
      return {
        primary: null,
        secondary: null,
      };
    }

    let score = {
      tech: 0,
      creative: 0,
      business: 0,
      healthcare: 0,
    };

    values.forEach((val) => {
      const v = val.toLowerCase();

      if (
        v.includes("puzzle") ||
        v.includes("logic") ||
        v.includes("math") ||
        v.includes("science") ||
        v.includes("computer")
      ) {
        score.tech++;
      }

      if (
        v.includes("art") ||
        v.includes("music") ||
        v.includes("writing") ||
        v.includes("creative")
      ) {
        score.creative++;
      }

      if (
        v.includes("business") ||
        v.includes("economics") ||
        v.includes("corporate") ||
        v.includes("lead")
      ) {
        score.business++;
      }

      if (
        v.includes("health") ||
        v.includes("hospital") ||
        v.includes("biology") ||
        v.includes("help")
      ) {
        score.healthcare++;
      }
    });

    const careerData = {
      tech: {
        career: "Software Developer",
        skills: ["Programming", "Problem Solving", "DSA", ],
      },

      creative: {
        career: "Creative Designer",
        skills: ["UI Design", "Figma", "Creativity"],
      },

      business: {
        career: "Business Analyst",
        skills: ["Analytics", "Management", "Communication"],
      },

      healthcare: {
        career: "Healthcare Professional",
        skills: ["Biology", "Research", "Patient Care"],
      },
    };

    const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

    const first = sorted[0];
    const second = sorted[1];

    const total = Object.values(score).reduce((a, b) => a + b, 0);

    return {
      primary: {
        ...careerData[first[0]],
        match: `${Math.round((first[1] / total) * 100)}%`,
      },

      secondary:
        first[1] === total
          ? null
          : {
              ...careerData[second[0]],
              match: `${Math.round((second[1] / total) * 100)}%`,
            },
    };
  };

  const result = calculateCareer();

  if (!result.primary) {
    return (
      <div className="result-container">
        <h1>No Assessment Data Found</h1>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h1 className="result-title">Career Assessment Result</h1>

      <div className="result-cards">
        {/* PRIMARY */}

        <div className="result-card">
          <h2>Primary Career</h2>

          <h3>{result.primary.career}</h3>

          <div className="result-score">{result.primary.match} Match</div>

          <ul>
            {result.primary.skills.map((skill, index) => (
              <li key={index}>✓ {skill}</li>
            ))}
          </ul>

          {/* <Link className="result-btn" to={`/roadmap/${result.primary.career}`}>
            View Roadmap
          </Link> */}
        </div>

        {/* SECONDARY */}

        {result.secondary && (
          <div className="result-card">
            <h2>Secondary Career</h2>

            <h3>{result.secondary.career}</h3>

            <div className="result-score">{result.secondary.match} Match</div>

            <ul>
              {result.secondary.skills.map((skill, index) => (
                <li key={index}>✓ {skill}</li>
              ))}
            </ul>
            {/* <Link
              className="result-btn"
              to={`/roadmap/${result.secondary.career}`}
            >
              View Roadmap
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
}
