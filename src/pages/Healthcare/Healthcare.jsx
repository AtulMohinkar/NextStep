import React from "react";
import { Link } from "react-router-dom";
import "./Healthcare.css";

export default function HealthcareCareer() {
  return (
    <>

      <main>
        <div className="healthcare-container">
          <h1 className="healthcare-page-title">Healthcare Careers</h1>

          <div className="healthcare-career-detail">
            <div className="healthcare-career-header">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
                alt="Healthcare"
              />

              <h2>Healthcare & Medical Careers</h2>
            </div>

            <Section title="Overview">
              <p>
                Healthcare professionals work in various settings to diagnose,
                treat and prevent illness and injury. This field includes
                doctors, nurses, pharmacists, therapists and many other roles.
              </p>
            </Section>

            <Section title="Education Path">
              <ul>
                <li>
                  <strong>Associate Degree:</strong>
                  Nursing assistant, medical assistant
                </li>

                <li>
                  <strong>Bachelor Degree:</strong>
                  Registered nurses, health administrators
                </li>

                <li>
                  <strong>Graduate Degrees:</strong>
                  Physicians, pharmacists, advanced nurses
                </li>

                <li>
                  <strong>Licensing:</strong>
                  Certification required for most professions
                </li>

                <li>
                  <strong>Residency:</strong>
                  Doctors complete postgraduate training
                </li>
              </ul>
            </Section>

            <Section title="Required Skills">
              <ul>
                <li>Scientific knowledge of biology and anatomy</li>

                <li>Attention to detail</li>

                <li>Empathy and compassion</li>

                <li>Communication skills</li>

                <li>Stress management</li>

                <li>Teamwork</li>
              </ul>
            </Section>

            <Section title="Career Prospects">
              <p>
                Healthcare is one of the fastest-growing industries. It provides
                stable career opportunities with continuous demand.
              </p>
            </Section>

            <Section title="Salary Range">
              <ul>
                <li>Medical Assistants: $35,000 - $50,000</li>

                <li>Registered Nurses: $60,000 - $100,000+</li>

                <li>Physical Therapists: $80,000 - $120,000</li>

                <li>Pharmacists: $120,000 - $150,000</li>

                <li>Physicians: $200,000+</li>
              </ul>
            </Section>

            <Section title="Common Career Paths">
              <ul>
                <li>Clinical Roles - Doctors, nurses, therapists</li>

                <li>Diagnostic Roles - Radiologists, technicians</li>

                <li>Support Roles - Medical assistants</li>

                <li>Administrative Roles - Healthcare managers</li>

                <li>Public Health - Epidemiologists</li>
              </ul>
            </Section>

            <div className="healthcare-buttons">
              <Link className="healthcare-btn-secondary" to="/careers">
                Back to Careers
              </Link>

              <Link className="healthcare-btn" to="/assessment">
                Take Career Assessment
              </Link>
            </div>
          </div>
        </div>
      </main>

      
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h3>{title}</h3>

      {children}
    </section>
  );
}
