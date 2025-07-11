import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setIsSidebarOpen(false); // Hide sidebar when screen width exceeds 900px
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure sidebar is correctly hidden on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggles the sidebar state
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          <p>Philip Okeniyi</p>
          <p>Full-Stack Developer</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links nav-topbar">
          <ul className="nav-list nav-list-desk">
            <li>
              <NavLink to="/" className="nav-link nav-mobile-hide">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="nav-link nav-mobile-hide">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link nav-mobile-hide">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-links nav-topbar">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/contact"
                className="nav-link-contact nav-mobile-hide"
              >
                Contact Me
              </NavLink>
            </li>

            <li>
              {/* Toggle Button for Mobile Sidebar */}
              <div className="menu-for-sidebar">
                <button
                  className="menu-button menu-button-hide"
                  onClick={toggleSidebar}
                >
                  <span
                    className={
                      isSidebarOpen ? "icon-animate open" : "icon-animate"
                    }
                  >
                    {isSidebarOpen ? "✖" : "☰"}
                  </span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar Navigation (for mobile) */}
      <nav className="nav-mobile">
        <div className={`nav-sidebar${isSidebarOpen ? " open" : ""}`}>
          <ul className="nav-list-mobile">
            <li>
              <NavLink to="/" className="nav-link" onClick={toggleSidebar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="nav-link" onClick={toggleSidebar}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link" onClick={toggleSidebar}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={toggleSidebar}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
