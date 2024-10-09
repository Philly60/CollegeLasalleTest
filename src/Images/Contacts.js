import React from "react";
 
const Contact = () => {
  return (
<section id="contact" className="section contact">
<div className="container">
<div className="d-grid contact__wrapper">
<div className="contact__content">
<h2 className="contact__title">
              Interested in working together? Let's talk
</h2>
<p className="contact__description">
              Ready to work together on your next software project? I'd love to
              hear from you! Feel free to get in touch using the contact
              information below. Whether you have a specific project in mind or
              just want to chat about Technologies, I am here to help. I will
              respond to your message as quickly as possible and look forward to
              connecting with you soon.
</p>
</div>
<div className="contact__btn">
<a href="#contact" className="btn btn--secondary">
              Get in touch
</a>
</div>
</div>
</div>
</section>
  );
};
 
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
 
const App = () => {
  return (
<main>
<Contact />
<Footer />
</main>
  );
};
 