import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card text-white border-0 mx-3" style={{backgroundColor: '#984307'}}><img
            className="card-img img-fluid"
            src="./assets/main2.png.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Puisqu'il faut savoir se vendre, autant le faire vraiment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
