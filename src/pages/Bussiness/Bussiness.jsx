import React from "react";
import { Link } from "react-router-dom";
import "./Bussiness.css";

export default function BussinessCareer() {
  return (
    <>

      <main>
        <div className="bussiness-container">
          <h1 className="bussiness-page-title">Business & Management Careers</h1>

          <div className="bussiness-career-detail">
            <div className="bussiness-career-header">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Business"
              />

              <h2>Business & Management Career</h2>

              <p>
                Business and management careers involve planning, organizing,
                leading and controlling business activities.
              </p>
            </div>

            <div className="bussiness-career-content">
              <h2>Popular Career Options</h2>

              <div className="bussiness-career-grid">
                <Card
                  title="Business Manager"
                  text="Manage teams, operations and business strategies."
                />

                <Card
                  title="Marketing Manager"
                  text="Develop marketing campaigns and grow brands."
                />

                <Card
                  title="Financial Analyst"
                  text="Analyze financial data and support decisions."
                />

                <Card
                  title="Entrepreneur"
                  text="Build and manage your own business."
                />
              </div>

              <h2>Required Skills</h2>

              <ul className="bussiness-skills">
                <li>Leadership</li>

                <li>Communication</li>

                <li>Problem Solving</li>

                <li>Decision Making</li>

                <li>Financial Knowledge</li>
              </ul>

              <h2>Education Path</h2>

              <p>
                BBA, MBA, Finance, Marketing, Business Analytics and related
                fields can help you enter this career.
              </p>

              <Link className="bussiness-btn" to="/assessment">
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}

function Card({ title, text }) {
  return (
    <div className="bussiness-career-card">
      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}
