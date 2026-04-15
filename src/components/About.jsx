import PerfilImg from '../img/perfil.png';

function About() {
  return (
    <section id="sobre" className="sessao-sobre-mim">
      <div className="imagem-usuario">
        <img src={PerfilImg} alt="Pablo foto-perfil" />
      </div>
      <div className="textos-pessoais">
        <h1>Pablo de Pádua Leão e Silva</h1>
        <p>Sou psicólogo e estudante do curso tecnólogo em Sistemas para a Internet.</p>
        <p className="paragrafo-detalhe"></p>
      </div>
    </section>
  );
}

export default About;