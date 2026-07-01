import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Careers.css";
import CareerSearch from "../../components/CareerSearch/CareerSearch";

const Careers = () => {
  const careers = [
    {
      title: "Technology & IT",
      category: "Technology",
      education: "Bachelor's in Computer Science",
      skills: "Programming, DSA, Problem Solving",
      growth: "High demand",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "/software-career",
    },

    {
      title: "Healthcare & Medicine",
      category: "Healthcare",
      education: "Medical degrees",
      skills: "Biology, Patient care",
      growth: "Stable career",
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
      link: "/healthcare-career",
    },

    {
      title: "Business & Finance",
      category: "Business",
      education: "Business, Finance",
      skills: "Leadership, Communication",
      growth: "Good growth",
      img: "https://plus.unsplash.com/premium_photo-1771376761447-a9f442d0ad1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVzc2luZXNzJTIwYW5kJTIwZmluYW5hY2V8ZW58MHx8MHx8fDA%3D",
      link: "/bussiness-career",
    },
    {
      title: "Creative Arts & Design",
      category: "Creative",
      education: "Portfolio based",
      skills: "Creativity, Design",
      growth: "Freelance opportunities",
      img: "https://plus.unsplash.com/premium_photo-1677626249249-86e07cdb1a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydHMlMjBhbmQlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      link: "/arts-career",
    },

    {
      title: "Engineering",
      category: "Engineering",
      education: "Bachelor Engineering",
      skills: "Math, Technical Skills",
      growth: "High demand",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "/engineering-career",
    },

    {
      title: "Education & Teaching",
      category: "Education",
      education: "Teaching degrees",
      skills: "Communication, Patience",
      growth: "Stable career",
      img: "https://plus.unsplash.com/premium_photo-1661380797814-d0bcc01342b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
      link: "/teaching-career",
    },
  ];

  const [filtered, setFiltered] = useState(careers);

  return (
    <main>
      <div className="careers-container">
        <h1 className="careers-page-title">Explore Career Options</h1>

        <p>
          Browse through various career fields to understand education, skills
          and job outlook.
        </p>

        <CareerSearch careers={careers} setFiltered={setFiltered} />

        <div className="careers-career-grid">
          {filtered.map((career, index) => (
            <div className="careers-career-card" key={index}>
              <img
                src={career.img}
                alt={career.title}
                className="careers-career-image"
              />
              <h3>{career.title}</h3>

              <p>
                <strong>Education:</strong> {career.education}
              </p>

              <p>
                <strong>Skills:</strong> {career.skills}
              </p>

              <p>
                <strong>Growth:</strong> {career.growth}
              </p>

              {career.link && (
                <Link className="careers-btn" to={career.link}>
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Careers;
