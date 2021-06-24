import React from "react";

const Depoimentos = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 pt-10 col-center m-auto">
                        <div className="depoimento">
                            <h2>Depoimentos</h2>
                        </div>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* <!-- Carousel --> */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b></b>Bolo de aniversário</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624541888/dp4_vknayk.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Stella</b>, Bolo</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624541888/dp3_eh4hhl.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Tassi</b>, Empada</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624541889/dp5_hyvr07.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Saulo</b>, Salgados</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624541888/dp2_q5ay4z.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Stephanie</b>, Maça do Amor</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624541888/dp6_bonxmh.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624115325/Pngtree_stay_home_illustration_of_cute_6374931_p2gzas.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Rosana</b>, Salgados</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624541888/dp_qb6na1.jpg" alt="" />
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
