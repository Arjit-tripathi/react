function MainSection(props) {
  return (
    <>
    <div className="container">
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="/" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </div>
    </>
  );
}

export default MainSection;
