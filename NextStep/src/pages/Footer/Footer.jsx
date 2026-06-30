import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h4>BharatSkills</h4>
            <br />
            <p>
              Helping students discover the right career path with expert
              guidance and industry insights.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <br />
            <Link to="/">Home</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Top Careers</h4>
            <br />
            <p>Software Developer</p>
            <p>Data Scientist</p>
            <p>Chartered Accountant</p>
            <p>IAS Officer</p>
          </div>

          <div>
            <h4>Contact</h4>
            <br />
            <p>Email: support@nextstep.com</p>
            <p>Phone: +91 9876543210</p>
            <p>India</p>
          </div>
        </div>

        <br />
        <hr />

        <div className="footer-bottom">
           © 2026 NextStep | Developed by Atul | All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;