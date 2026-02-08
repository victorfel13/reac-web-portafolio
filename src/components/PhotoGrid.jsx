import "./PhotoGrid.css";

function PhotoGrid({ photos }) {
  return (
    <>
    <div className="photo-grid__container">
      <h2 className="photogrid__subtitle">Personas que hicieron posible esto </h2>
      <section className="photo-grid">
      {photos.map((photo, index) => (
        <figure key={index} className="photo-grid__item">
          <img
            src={photo.src}
            alt={photo.title}
            className="photo-grid__img"
          />
          <figcaption className="photo-grid__caption">
            <h3>{photo.title}</h3>
            <p>{photo.role}</p>
          </figcaption>
        </figure>
      ))}
    </section>
    </div>
    
    </>
    
    
  );
}

export default PhotoGrid;
