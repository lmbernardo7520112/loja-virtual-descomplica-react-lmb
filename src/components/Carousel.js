import React, { useState } from 'react';
import productsData from './ProductsData';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? productsData.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === productsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productsData.map((product, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={product.carouselImage} className="carousel-image d-block w-100" alt={product.name} />
              <div className="carousel-caption d-none d-md-block centered-caption">
                <p className="frase-efeito">{product.carouselCaption}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="prev" onClick={handlePrevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="next" onClick={handleNextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

  