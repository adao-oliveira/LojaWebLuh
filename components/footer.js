import React from "react";
// import emailjs from "emailjs-com";

// function sendEmail(e) {
//   e.preventDefault();

//   emailjs.sendForm('default_service', 'template_ga2ba7p', e.target, 'user_VqAgkVtnF9Zj7pBBYzQLF')
//     .then((result) => {
//       alert("E-mail enviado com sucesso");
//     }, (error) => {
//       alert("Ocorreu um erro inesperado, verifique os dados e tente novamente!");
//     });
//   e.target.reset()
// }

export default function Footer() {
  return (
    <>
      <footer>
        <div className="main-content">
          <div className="left box">
            <h2>Sobre</h2>
            <div className="content">
              <p>Apresentação</p>
              <div className="social">
                <a href="https://www.facebook.com/luciana.valerio.180"><span className="fab fa-facebook-f"></span></a>
                <a href="https://www.instagram.com/luuh_.miranda/"><span className="fab fa-instagram"></span></a>
                <a href="https://wa.me/5511991781497?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20seu%20produto."><span className="fab fa-whatsapp"></span></a>
              </div>
            </div>
          </div>

          <div className="center box">
            <h2>Produtos</h2>
            <div className="content">
              <ul>
                <li>
                  <a href="#bolos">Bolos</a>
                </li>
                <li>
                  <a href="#salgados">Salgados</a>
                </li>
                <li>
                  <a href="#doces">Doces</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="right box">
            <h2>Fale conosco</h2>
            <div className="content">
              {/* <form onSubmit={sendEmail}> */}
              <form>
                <div className="name">
                  <div className="text">Nome completo *</div>
                  <input type='nome' name="from_name" id="from_name" required />
                </div>
                <div className="email">
                  <div className="text">Seu melhor e-mail *</div>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="tell">
                  <div className="text">Número para contato *</div>
                  <input type="tell" name="telefone" id="telefone" maxLength="11" onkeypress="mascara(this)" required />
                </div>
                <div className="msg">
                  <div className="text">Assunto... *</div>
                  <textarea rows="2" cols="25" type='assunto' name="mensagem" id="mensagem" required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Enviar</button>
                </div>
              </form>
              <div className="center box">
              <ul className="text-center">
                  <li>
                    <a href="#">Que tal marcar um café?</a>
                  </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <center>
            <span className="credit" style={{fontSize:'20px'}}><a href="/">Lu Cakes</a></span>
            <br /><i className="far fa-copyright text-warning"></i>
            <span> {new Date().getFullYear()} Todos os Direitos reservados</span>
          </center>
        </div>
      </footer>
    </>
  );
}