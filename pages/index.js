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
        
      </div>
    </>
  );
};
export default Home;