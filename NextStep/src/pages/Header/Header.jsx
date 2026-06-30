import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const location = useLocation(); // ✅ ADD THIS

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

  // ✅ helper function for active link
  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          Next<span>Step</span>
        </div>

        {/* menu button */}
        <div className="menu-icon" onClick={() => setMenu(!menu)}>
          ☰
        </div>

        <nav className={menu ? "header-nav show" : "header-nav"}>
          <Link
            to="/"
            onClick={() => setMenu(false)}
            className={isActive("/") ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/careers"
            onClick={() => setMenu(false)}
            className={isActive("/careers") ? "active" : ""}
          >
            Careers
          </Link>

          <Link
            to="/assessment"
            onClick={() => setMenu(false)}
            className={isActive("/assessment") ? "active" : ""}
          >
            Assessment
          </Link>

          <Link
            to="/resources"
            onClick={() => setMenu(false)}
            className={isActive("/resources") ? "active" : ""}
          >
            Resources
          </Link>

          <Link
            to="/compare"
            onClick={() => setMenu(false)}
            className={isActive("/compare") ? "active" : ""}
          >
            Compare
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenu(false)}
            className={isActive("/contact") ? "active" : ""}
          >
            Contact
          </Link>

          <button className="header-dark-btn" onClick={toggleDarkMode}>
            🌙
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;