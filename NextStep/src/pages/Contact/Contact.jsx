import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Career Guidance",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");
    console.log(form);

    setForm({
      name: "",
      email: "",
      subject: "Career Guidance",
      message: "",
    });
  };

  return (
    <main>
      <div className="contact-container">
        <h1 className="contact-page-title">Contact Us</h1>

        <p>
          Have questions about career choices? Need personalized guidance? Reach
          out to us.
        </p>

        <div className="contact-grid">
          {/* LEFT SIDE - FORM */}
          <div className="contact-form">
            <div className="contact-info-card">
              <h3> 📩Send us a Message</h3>

              <form onSubmit={submitForm}>
                <div className="contact-form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <br/>

                <div className="contact-form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <br/>

                <div className="contact-form-group">
                  <label>Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option>Career Guidance</option>
                    <option>Assessment Help</option>
                    <option>Resource Request</option>
                    <option>Other Questions</option>
                  </select>
                </div>
                <br/>

                <div className="contact-form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your career concerns"
                    required
                  />
                </div>

                <button type="submit" className="contact-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-info">
            {/* Contact Information */}
            <div className="contact-info-card">
              <h3>Contact Information</h3>

              <p>
                <strong>📍 Address:</strong>
                <br />
                123 Career Street
              </p>

              <p>
                <strong>📞 Phone:</strong>
                <br />
                (123) 456-7890
              </p>

              <p>
                <strong>📩 Email:</strong>
                <br />
                info@careerguide.com
              </p>

              <p>
                <strong>⏱️  Hours:</strong>
                <br />
                Mon-Fri 9 AM - 5 PM
              </p>
            </div>

            {/* Services */}
            <div className="contact-info-card">
              <h3>Career Counseling Services</h3>

              <p>We provide one-on-one career guidance.</p>

              <ul>
                <li>Career assessment</li>
                <li>Education planning</li>
                <li>Resume preparation</li>
                <li>Interview preparation</li>
              </ul>

              <p>
                <strong>Schedule:</strong>
                <br />
                Call (123)456-7890
              </p>
            </div>

           
            
          </div>
        </div>
      </div>
    </main>
  );
}
