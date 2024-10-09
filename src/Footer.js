import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
  <footer id="footer" className="footer">
  <div className="container">
  <div className="d-grid footer__wrapper">
  <div className="footer__content">
  <h4 className="footer__title">Follow Me</h4>
  <ul className="footer__social-list">
  <li className="footer__social-item">
  <a
                    href="https://www.instagram.com/dimitri_argiropoulos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
  >
  <i className="ri-instagram-fill"></i>
  </a>
  </li>
  <li className="footer__social-item">
  <a
                    href="https://www.linkedin.com/in/dimitri-argiropoulos-3391a431a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
  >
  <i className="ri-linkedin-fill"></i>
  </a>
  </li>
  <li className="footer__social-item">
  <a
                    href="https://github.com/dimi500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
  >
  <i className="ri-github-fill"></i>
  </a>
  </li>
  </ul>
  </div>
  <div className="footer__content">
  <h4 className="footer__title">Email Me</h4>
  <a href="mailto:argiropoulosdimitios@gmail.com" className="footer__contact">
                argiropoulosdimitios@gmail.com
  </a>
  </div>
  <div className="footer__content">
  <h4 className="footer__title">Call Me</h4>
  <a href="tel:(438)-390-7198" className="footer__contact">
                (438)-390-7198
  </a>
  </div>
  </div>
  </div>
  </footer>
    );
  };
  
  export default Footer;