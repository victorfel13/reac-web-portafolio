import "./Premiere.css";
import AudioPlayer from "./AudioPlayer"; // tu componente de audio

function Premiere({ cover, title, text, audio }) {
  return (
    <section className="premiere">
      {/* Imagen de portada */}
      <img className="premiere__img" src={cover} alt={title} />

      {/* Info */}
      <div className="premiere__info">
        <h2 className="premiere__title">{title}</h2>
        <p className="premiere__text">{text}</p>

        {/* Reproductor */}
        {audio && (
          <AudioPlayer
            title={audio.title}
            artist={audio.artist}
            audioSrc={audio.audioSrc}
            externalLink={audio.externalLink}
          />
        )}
      </div>
    </section>
  );
}

export default Premiere;
