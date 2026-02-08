import React from "react";
import "./Intro.css";
import introImg from "../img/41.png"; // 🔑 Importa la imagen desde src

function Intro() {
  return (
    <section id="intro" className="intro">
      <h1 className="intro__title">Grecko 96</h1>
      <h2 className="intro__subtitle">y La Amenaza</h2>
      <h3 className="intro__subdos">presentan:</h3>

      <div className="intro__img-container">
        <img className="intro__img" src={introImg} alt="Imagen de introducción" />
      </div>
    </section>
  );
}

export default Intro;
