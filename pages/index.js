import React from "react";


const Home = () => {

  return (
    <>
      <div>
        <div className="mt-32">
          <video className="video-fluid z-depth-1 w-full -px-12" autoPlay loop muted>
            <source src="https://res.cloudinary.com/db5gm6hgs/video/upload/v1624326322/video_redrt0.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Slide Mobile */}
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade d-lg-none" data-ride="carousel" data-interval="2500">
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

        {/* <!-- Grid row --> */}
        <div className="mt-4">
          <h2 className="text-center"> Bolos </h2>
        </div>
        <div class="row mt-4">
          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!--Modal: nome--> */}
            <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
              </div>
            </div>
            {/* <!--Modal: Name--> */}
              <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg" alt="video"
                data-toggle="modal" data-target="#modal1" />
          </div>
          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal: Name--> */}
            <div class="modal fade" id="modal6" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
              </div>
            </div>
            {/* <!--Modal: Name--> */}
              <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg" alt="video"
                data-toggle="modal" data-target="#modal6" />
          </div>
          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Modal: Name--> */}
            <div class="modal fade" id="modal4" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
              </div>
            </div>
            {/* <!--Modal: Name--> */}
              <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg" alt="video"
                data-toggle="modal" data-target="#modal4" />
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}

        {/* End Slide Desktop */}
      </div>
    </>
  );
};
export default Home;