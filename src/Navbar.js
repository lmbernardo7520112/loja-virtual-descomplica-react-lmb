import React from 'react';
import LogoDescomplica from './images/LogoDescomplica.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Loja Virtual
        <img src={LogoDescomplica} alt="Logotipo da Loja Virtual" className="logo-image" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#quem-somos">
              Quem Somos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nosso-time">
              Nosso Time
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nossos-produtos">
              Nossos Produtos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
