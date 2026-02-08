import "./Footer.css";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        <p className="footer__brand">© 2026 Grecko 96</p>

        <nav className="footer__nav">
          <a
            href="https://www.instagram.com/grecko_96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/channel/UCL9_6OArA0mTfVCeGW0f22A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://open.spotify.com/intl-es/artist/6xVmXhtcOItqZ4FmxXxoSE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <FaSpotify />
          </a>
        </nav>

        <p className="footer__credit">Sitio hecho por MiniDesk Dv</p>

      </div>
    </footer>
  );
}

export default Footer;
