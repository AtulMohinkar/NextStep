import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Assessment.css";

const Assessment = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (q, value) => {
    setAnswers({
      ...answers,
      [q]: value,
    });
  };
  const submitTest = (e) => {
    e.preventDefault();

    localStorage.setItem("assessmentAnswers", JSON.stringify(answers));


    console.log("Navigating now...");

    navigate("/result");
  };

  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="assessment-container">
          <h1 className="assessment-page-title">Career Assessment Test</h1>

          <p>
            Answer these questions to discover careers that match your interests
            and personality.
          </p>

          <div className="assessment-container">
            <form onSubmit={submitTest}>
              <Question
                number="1"
                title="Which activities do you enjoy most?"
                name="q1"
                options={[
                  "Solving puzzles and logical problems",
                  "Helping and caring for others",
                  "Creating art, music, or writing",
                  "Organizing events and leading groups",
                ]}
                change={handleChange}
              />

              <Question
                number="2"
                title="What subjects do you excel in or enjoy?"
                name="q2"
                options={[
                  "Math and Science",
                  "Biology and Health Sciences",
                  "Arts and Literature",
                  "Business and Economics",
                ]}
                change={handleChange}
              />

              <Question
                number="3"
                title="What work environment do you prefer?"
                name="q3"
                options={[
                  "Office with computers and technology",
                  "Hospital, clinic, or laboratory",
                  "Studio or creative space",
                  "Corporate office",
                ]}
                change={handleChange}
              />

              <Question
                number="4"
                title="How do you prefer to solve problems?"
                name="q4"
                options={[
                  "Using logical analysis and data",
                  "Following procedures",
                  "Thinking creatively",
                  "Collaborating with a team",
                ]}
                change={handleChange}
              />

              <button type="submit" className="assessment-btn">
                Submit Assessment
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

const Question = ({ number, title, name, options, change }) => {
  return (
    <div className="assessment-question">
      <h3>
        {number}. {title}
      </h3>

      <div className="assessment-options">
        {options.map((item, index) => (
          <div className="assessment-option" key={index}>
            <label>
              <input
                type="radio"
                name={name}
                value={item}
                onChange={(e) => change(name, e.target.value)}
              />

              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
