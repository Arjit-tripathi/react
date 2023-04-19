function OurClients() {
  return (
    <>
      <div className="container text-center space" id="our-clients">
        <div className="row">
          <h2 className="text-center spaceb">Our Clients</h2>
          {/* <div className="hr">&nbsp;</div> */}
        </div>
        <div className="row ">
          <div className="col-sm logoborder">
            <img src="client/image1.png" alt="logo1" />
          </div>
          <div className="col-sm logoborder">
            <img src="client/image2.png" alt="logo2" />
          </div>
          <div className="col-sm logoborder">
            <img src="client/image3.png" alt="logo3" />
          </div>
          <div className="col-sm logoborder">
            <img src="client/image4.png" alt="logo4" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm logoborder">
            <img src="client/image3.png" alt="logo1" />
          </div>
          <div className="col-sm logoborder">
            <img src="client/image1.png" alt="logo2" />
          </div>
          <div className="col-sm logoborder">
            <img src="client/image4.png" alt="logo3" />
          </div>
          <div className="col-sm logoborder">
            <img src="client/image2.png" alt="logo4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurClients;
