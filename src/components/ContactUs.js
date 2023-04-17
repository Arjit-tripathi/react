function ContactUs(props) {
  return (
    <>
      <div className="container-fluid contact-us">
        <div className="row">
          <h2 className="text-center">Get In Touch</h2>
        </div>
        <div className="container">
          <div className="row">

            <div className="col">
              <div className="card" >
              <p className="card-img-top text-center"><svg xmlns="http://www.w3.org/2000/svg"color="#fbae3e" width="26" height="26" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
</svg>
               </p>
                <div className="card-body">
                  <h5 className="card-title text-center">Visit Our Place</h5>
                  <p className="card-text text-center">35 Ground Floor, North West Avenue<br/>35 Ground Floor, North West Avenue<br/>35 Ground Floor, North West Avenue<br/></p>
                  
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.text}</p>
                  
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.text}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
