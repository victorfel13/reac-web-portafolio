import React from "react";
import "./Navbar.css";
import logo from "../img/Recurso 1.png"; // 🔑 Importa la imagen desde src

function Navbar() {
  return (
    <nav className="navbar">
      <div className="head">
        <img className="head__logo" src={logo} alt="Logo" />
      </div>
      <ul className="menu">
        <li>
          <a href="#intro">Inicio</a>
        </li>
        <li>
          <a href="#about">¿Quién soy?</a>
        </li>
        <li>
          <a href="#music">Música</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
