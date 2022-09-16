import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <h1>CryptoBuy</h1>
        </div>
        <div className="footer-services">
          <ul>
            <h2>Quick links</h2>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h2> get weekly newsletter</h2>
          <input type="text" placeholder="Enter your email &#8658;" />
        </div>
      </div>

      <div className="footer-social">
        <div className="footer-copyright">
          <span>Created by ♥ from CryptoBuy</span>
        </div>
        <div className="footer-socials">
          <i class="fa fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
