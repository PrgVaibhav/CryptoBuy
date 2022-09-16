import React from 'react';

function Navbar() {
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
  return (
    <>
      <header className="header">
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
