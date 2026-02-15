import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Premiere from "./components/premiere";
import Videoclip from "./components/Videoclip";
import MediaBlock from "./components/MediaBlock";
import PhotoGrid from "./components/PhotoGrid";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import audioAluminio from "./audio/Aluminiostreamok.m4a";
import "./app.css";

import img1 from "./img/27.jpg";
import img2 from "./img/14.jpg";
import img3 from "./img/4.jpg";
import img4 from "./img/22.jpg";
import img5 from "./img/30.jpg";
import img6 from "./img/42.jpeg";
import img7 from "./img/44.png";
import img8 from "./img/3.jpg";
import cover from "./img/36c1851e-f61a-4dde-a384-ae5fd55c33f9_20260205_112608_0000.png";

function App() {
  return (
    <>
      <Navbar />

      <FadeInSection>
        <Intro />
      </FadeInSection>

      <FadeInSection>
        <Premiere
  cover={cover}
  title="Aluminio"
  text="Lorem ipsum dolor sit amet..."
  audio={{
    title: "Aluminio",
    artist: "Grecko 96",
    audioSrc: audioAluminio, // 🔑 usar la importación
    externalLink:
      "https://open.spotify.com/intl-es/track/7L1DvBl1ShzXQhKz1mQiaZ?si=7119eba5c21247be",
  }}
/>
      </FadeInSection>

      <FadeInSection>
        <Videoclip />
      </FadeInSection>

      <FadeInSection>
        <MediaBlock
          image={img1}
          title="Cosas en las que nos basamos"
          text="Si hoy tuviéramos que señalar un proyecto que esté empujando el hip hop desde Mérida hacia otro lugar, ese sería Grecko 96.

No por estadísticas, ni por algoritmos, ni por fórmulas probadas.
Sino por intención.

Junto a su equipo ha construido un sonido que intenta romper con la hegemonía del hip hop tradicional en México, combinando funk, ritmos latinos y decisiones intuitivas: lo que funcione, lo que se sienta honesto, lo que haga falta para romper la inercia. Las letras se apoyan en referencias cinematográficas y en la vida cotidiana de personas comunes. Parte de ese enfoque se traslada también al escenario: hip hop interpretado con banda en vivo.

El proyecto se ha construido de forma colectiva, con la participación de distintos productores y colaboradores. Ese rango creativo se refleja en canciones como “Aluminio”, una cumbia construida a partir de samples que remiten a la calle en México, o “Funk”, una pieza que dialoga directamente con el ADN del hip hop, evocando sus primeros años y su energía rítmica.

En “Aluminio”, ese interés por lo cotidiano se vuelve explícito: la canción incorpora sonidos capturados de la calle, como las voces de personas que recorren la ciudad vendiendo chatarra. Más que un recurso estético, es una forma de anclar la música a lo que sucede alrededor, de hacer que el hip hop suene a lo que se vive todos los días."
        />
      </FadeInSection>

      <FadeInSection>
        <PhotoGrid
          photos={[
            {
              src: img2,
              title: "Daniel (Voz y letras)",
              role: "",
            },
            {
              src: img3,
              title: "Rino (Guitarra y producción)",
              role: "",
            },
            {
              src: img4,
              title: "Víctor (Sintetizadores y producción)",
              role: "",
            },
            {
              src: img5,
              title: "Jhonatan (Bajo)",
              role: "",
            },
            {
              src: img6,
              title: "Carlos (Batería)",
              role: "",
            },
            {
              src: img7,
              title: "Alex Cstilla (Ing de grabación y mentor del proyecto)",
              role: "",
            },
            {
              src: img8,
              title: "Mechi (Filmaker)",
              role: "",
            },
          ]}
        />
      </FadeInSection>

      <Footer />
    </>
  );
}

export default App;
