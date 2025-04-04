import React from "react";
import {  NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-one">
        <div className="footer-me">
          <h2>Philip Okeniyi</h2>
          <p>Full-Stack Developer </p>
          <p>
            Looking for a developer? Let's build something amazing together!
          </p>
          <button>
            <NavLink to="/contact">Contact Me</NavLink>
          </button>
        </div>

        <div className="footer-ql">
          <h2>Quick Links</h2>
          <ul className="">
            <li>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className="">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-lc">
          <h2>Let's Connect!</h2>
          <p>
            <a
              href="https://x.com/tundeCodes_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>

            <a
              href="mailto:okeniyiphilip@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/philip-okeniyi-368528222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a
              href="https://github.com/philipokeniyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/philipokeniyi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </p>
        </div>
      </section>

      <section className="footer-two">
        <p>© Philip Okeniyi 2025 . All Rights Reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
