import React from 'react';
import images from '../images'; // Import the images object

function OurTeamSection() {
  return (
    <section id="nosso-time" className="section">
      <h2>Nosso Time</h2>
      <div className="section-content">
        <div className="team-member">
          <img src={images.pessoa1} alt="Membro 1" />
          <p>Nelson Mandela</p>
        </div>
        <div className="team-member">
          <img src={images.pessoa2} alt="Membro 2" />
          <p>Gilberto Gil</p>
        </div>
        <div className="team-member">
          <img src={images.pessoa3} alt="Membro 3" />
          <p>Thaís Araújo</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeamSection;
