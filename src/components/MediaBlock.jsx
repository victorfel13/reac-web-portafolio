import "./MediaBlock.css";

function MediaBlock({ image, title, text, reverse = false }) {
  return (
    <section className={`media-block ${reverse ? "reverse" : ""}`}>
      <img className="media-block__img" src={image} alt={title} />

      <div id="about" className="media-block__content">
        <h2 className="media-block__title">{title}</h2>
        <p className="media-block__text">{text}</p>
      </div>
    </section>
  );
}

export default MediaBlock;
