import React from 'react';
import images from '../images'; // Import the images object

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contato: contato@lojavirtual.com</p>
        <p>Endereço: Rua das Lojas, 123 - Cidade</p>
        <div className="social-icons">
          <a href="#"><img src={images.facebook} alt="Facebook" /></a>
          <a href="#"><img src={images.instagram} alt="Instagram" /></a>
          <a href="#"><img src={images.twitter} alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
