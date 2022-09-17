import React, { useState } from 'react';

function Navbar() {
  const [fixNavbar, setFixNavbar] = useState(false);

  function checkNavScroll() {
    if (window.scrollY >= 300) {
      setFixNavbar(true);
    } else {
      setFixNavbar(false);
    }
  }

  window.addEventListener('scroll', checkNavScroll);
  function onToggle() {
    const navToggler = document.querySelector('.nav-toggler');
    navToggler.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
      nav.style.maxHeight = nav.scrollHeight + 'px';
    } else {
      nav.setAttribute('style', '');
    }
  }

  console.log(window.scrollY);
  return (
    <>
      <header className={fixNavbar ? 'header fixed' : 'header'}>
        <div className="container">
          <div className="row">
            <div className="logo">
              <a href="#">CryptoBuy</a>
            </div>
            <button type="button" onClick={onToggle} className="nav-toggler">
              <span></span>
            </button>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <button className="btn cta-btn" href="#">
                    Connect Wallet
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
