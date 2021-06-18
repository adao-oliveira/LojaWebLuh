import React from "react";

const Apresentacao = () => {

    return (
        <>
            <div className="about-box-main mt-32">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="noo-sh-title text-block texto" id="textSlider">
                                Bem Vindo(a)!
                            </h2>
                            <div className="text-lg leading-relaxed mt-5">
                                <p>
                                    Oi! Meu nome é Luciana. Sou a chef e proprietária da Lu Cakes Confeitaria 😀
                                </p>
                                <p>
                                    Quem me conhece sabe que a criatividade rola solta por aqui e que estou sempre atrás da inovação.💡
                                </p>
                                <p>
                                    Adoro fazer sonhos dos meus clientes se transformarem em realidade através dos meus doces e bolos e colocar ao máximo amor e conhecimento em cada pedido.
                                </p>
                            </div>
                            <h2>
                                Aproveite também para nos seguir nas redes sociais:
                                <div className="social mt-4 my-2">
                                <a href="#" target="_blank" class="long-share-btn facebook">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="#" target="_blank" class="long-share-btn instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://wa.me/5511991781497?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20seu%20produto." target="_blank" class="long-share-btn whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                                Um abraço.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apresentacao;
