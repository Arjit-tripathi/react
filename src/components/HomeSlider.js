function HomeSlider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="image/slider01.jpg" className="d-block w-100" alt=".." />

          <div className="carousel-caption d-none d-md-block">
            <h5>A Global Leader in Smart Energy Technology.</h5>
            <p>Parnika solar creates smart energy solutions that power our lives and drive future progress.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="image/slider02.jpg" className="d-block w-100" alt=".." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Parnika Solar is India’s most trusted solar energy company.</h5>
            <p>Parnika solar is a relatively superior brand compared to its peers with the lower pricing.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="image/slider03.jpg" className="d-block w-100" alt=".." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Parnika Solar is best solar energy company.</h5>
            <p>Parnika solar company is a provider of renewable energy solutions.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default HomeSlider;
