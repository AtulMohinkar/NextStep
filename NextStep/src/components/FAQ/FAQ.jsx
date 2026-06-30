import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const data = [
    { q: "Is this website free?", a: "Yes, it is completely free." },
    {
      q: "How does assessment work?",
      a: "It matches your interests with careers.",
    },
    { q: "Can I save careers?", a: "Yes using browser storage." },
    {
      q:"    q: Do I need an account to use this?",
      a: "No, you can explore most features without signing up."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-list">
        {data.map((item, index) => (
          <div className="faq-card" key={index}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
