import React from 'react';
import images from '../images';

function AboutUsSection() {
  return (
    <section id="quem-somos" className="section">
      <div className="section-content">
        <img src={images.aboutUs} alt="Quem Somos" />
        <p>Somos uma empresa comprometida em oferecer os melhores produtos para você. Com anos de experiência
          no mercado, nossa missão é proporcionar uma experiência de compra excepcional para nossos clientes.</p>
      </div>
    </section>
  );
}

export default AboutUsSection;
