import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <section id="intro" className="intro">
      <h1 className="intro__title">Grecko 96</h1>
      <h2 className="intro__subtitle">y La Amenaza</h2>
      <h3 className="intro__subdos">presentan:</h3>

      {/* contenedor para recortar la imagen */}
      <div className="intro__img-container">
        <img className="intro__img" src="/41.png" alt="Logo" />
      </div>
    </section>
  );
}

export default Intro;
