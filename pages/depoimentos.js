import React from "react";

const Depoimentos = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 pt-16 col-center m-auto">
                        <h2>Depoimentos</h2>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* <!-- Carousel --> */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4"><b>Juliana</b>, Bolo de aniversário</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624471851/Screenshot_20210623-150949_WhatsApp_gxulta.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4"><b>Luciana</b>, Salgados</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624471851/Screenshot_20210623-150949_WhatsApp_gxulta.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4"><b>Adão</b>, Doces</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624471851/Screenshot_20210623-150949_WhatsApp_gxulta.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Carousel Controls --> */}
                            <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Depoimentos;
