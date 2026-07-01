import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ/FAQ";
import "./Home.css";

const Feature = ({ title, text }) => {
  return (
    <div className="home-feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const CareerCard = ({ img, title, text, link }) => {
  return (
    <div className="home-career-card">
      <img src={img} alt={title} />
      <div className="home-career-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to={link} className="home-btn">
          Explore
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mode");

    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDark(!dark);

    document.body.classList.toggle("dark-mode");

    localStorage.setItem("mode", !dark ? "dark" : "light");
  };

  return (
    <>
      <main>
        <div className="home-container">
          <section className="home-hero">
            <h2>Find Your Perfect Career Path</h2>
            <br />
            <p>
              Confused about career choices? We help students discover their
              strengths and explore career options.
            </p>
            <br />

            <Link to="/assessment" className="home-btn">
              Start Career Assessment
            </Link>
          </section>

          <h2 className="home-page-title">How We Help Students</h2>

          <div className="home-features">
            <Feature
              title="Career Exploration"
              text="Explore different career fields and required skills."
            />

            <Feature
              title="Skill Assessment"
              text="Identify strengths and interests."
            />

            <Feature
              title="Path Planning"
              text="Get step-by-step career guidance."
            />
          </div>

          <h2 className="home-page-title">Popular Career Paths</h2>

          <div className="home-career-grid">
            <CareerCard
              img="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              title="Technology & IT"
              text="Software development, cybersecurity, data science."
              link="/software-career"
            />

            <CareerCard
              img="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
              title="Healthcare"
              text="Doctors, nurses, pharmacists and medical careers."
              link="/healthcare-career"
            />

            <CareerCard
              img="https://images.unsplash.com/photo-1552664730-d307ca884978"
              title="Business & Management"
              text="Marketing, finance and entrepreneurship."
              link="/bussiness-career"
              className="home-btn--2"
            />
          </div>
          <div className="home-container">
            {/* existing code */}

            <FAQ />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
