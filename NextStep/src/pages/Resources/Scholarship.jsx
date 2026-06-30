import React from "react";
import { Link } from "react-router-dom";
import "./Scholarship.css";

export default function Scholarship() {
  const scholarships = [
    {
      name: "National Scholarship Portal (NSP)",
      eligibility: "Students from Class 1 to Postgraduate",
      amount: "₹10,000 - ₹75,000 per year",
    },
    {
      name: "AICTE Pragati Scholarship",
      eligibility: "Girls pursuing technical education",
      amount: "₹50,000 per year",
    },
    {
      name: "PM Scholarship Scheme",
      eligibility: "Children of ex-servicemen",
      amount: "₹2,500 - ₹3,000 per month",
    },
  ];

  return (
    <div className="scholarship-container">
      <h1>Scholarship Opportunities</h1>

      {scholarships.map((item, index) => (
        <div className="scholarship-card" key={index}>
          <h2>{item.name}</h2>
          <p><strong>Eligibility:</strong> {item.eligibility}</p>
          <p><strong>Amount:</strong> {item.amount}</p>
        </div>
      ))}
    </div>
  );
}