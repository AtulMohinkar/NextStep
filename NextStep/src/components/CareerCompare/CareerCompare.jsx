import React, { useState } from "react";
import "./CareerCompare.css";

export default function CareerCompare() {
  const careers = {
    Developer: {
      salary: "High",
      skills: "Coding, DSA",
      growth: "Excellent",
    },

    Doctor: {
      salary: "Very High",
      skills: "Medical Knowledge",
      growth: "Stable",
    },

    Manager: {
      salary: "Good",
      skills: "Leadership",
      growth: "High",
    },

    Teacher: {
      salary: "Decent",
      skills: "Explanation",
      growth: "Steady",
    },

    Artist: {
      salary: "Moderate",
      skills: "Creativity",
      growth: "Unstable",
    },

    Analyst: {
      salary: "High",
      skills: "Data Visualization",
      growth: "Rapid",
    },
  };

  const [one, setOne] = useState("Developer");
  const [two, setTwo] = useState("Doctor");

  const careerNames = Object.keys(careers);

  return (
    <div className="compare-container">
      <h1>Compare Careers</h1>

      <div className="compare-selects">
        <select value={one} onChange={(e) => setOne(e.target.value)}>
          {careerNames.map((career) => (
            <option key={career} value={career}>
              {career}
            </option>
          ))}
        </select>

        <select value={two} onChange={(e) => setTwo(e.target.value)}>
          {careerNames.map((career) => (
            <option key={career} value={career}>
              {career}
            </option>
          ))}
        </select>
      </div>

      <div className="compare-grid">
        {[one, two].map((item) => (
          <div className="compare-card" key={item}>
            <h2>{item}</h2>

            <p>
              <strong>Salary:</strong> {careers[item].salary}
            </p>

            <p>
              <strong>Skills:</strong> {careers[item].skills}
            </p>

            <p>
              <strong>Growth:</strong> {careers[item].growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
