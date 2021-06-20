import React from "react";


const Home = () => {

  return (
    <>
      <div>
        {/* Slide Mobile */}
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade d-lg-none" data-ride="carousel" data-interval="2500">
          {/* <!-- indicadores --> */}
          {/* <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol> */}
          {/* Slider */}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047762/img2_sdvf95.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047759/img_ag7ai4.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047753/img3_mglyc0.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047762/img2_sdvf95.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047759/img_ag7ai4.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047753/img3_mglyc0.jpg" alt="Lu Cakes" /></div>
            </div>
          </div>
          {/* Avancar slide */}
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* End Slide Mobile */}

        {/* Slide Desktop */}
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade d-none d-lg-block" data-ride="carousel" data-interval="2500">
          {/* <!-- indicadores --> */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          {/* Slider */}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047762/img2_sdvf95.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047759/img_ag7ai4.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047753/img3_mglyc0.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047762/img2_sdvf95.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047759/img_ag7ai4.jpg" alt="Lu Cakes" /></div>
            </div>
            <div className="carousel-item">
              <div className="img"><img className="d-block img-fluid" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047753/img3_mglyc0.jpg" alt="Lu Cakes" /></div>
            </div>
          </div>
          {/* Avancar slide */}
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* End Slide Desktop */}
      </div>
    </>
  );
};
export default Home;