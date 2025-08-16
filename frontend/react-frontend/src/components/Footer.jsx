import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";



function Footer() {


  return (
    <div className="footer-container">

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              RUNNING PARTNER
            </Link>
          </div>
          <small className="website-rights">RUNNING PARTNER © 2024</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook">
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube">
              <i className="fa-brands fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
