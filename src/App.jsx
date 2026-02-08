import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Premiere from "./components/premiere";
import Videoclip from "./components/Videoclip";
import MediaBlock from "./components/MediaBlock";
import PhotoGrid from "./components/PhotoGrid";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

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
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit... Lorem ipsum dolor sit amet..."
          audio={{
            title: "Aluminio",
            artist: "Grecko 96",
            audioSrc: "/audio/Aluminiostreamok.m4a",
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
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy..."
        />
      </FadeInSection>

      <FadeInSection>
        <PhotoGrid
          photos={[
            {
              src: img2,
              title: "Daniel (Voz y letras)",
              role: "Mejor conocido como Grecko 96, Lorem ipsum dolor sit amet...",
            },
            {
              src: img3,
              title: "Rino (Guitarra y producción)",
              role: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            },
            {
              src: img4,
              title: "Víctor (Sintetizadores y producción)",
              role: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            },
            {
              src: img5,
              title: "Jhonatan (Bajo)",
              role: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            },
            {
              src: img6,
              title: "Carlos (Batería)",
              role: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            },
            {
              src: img7,
              title: "Alex Cstilla (Ing de grabación y mentor del proyecto)",
              role: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            },
            {
              src: img8,
              title: "Mechi (Filmaker)",
              role: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit...",
            },
          ]}
        />
      </FadeInSection>

      <Footer />
    </>
  );
}

export default App;
