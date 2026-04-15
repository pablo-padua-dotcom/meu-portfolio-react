
import ProjectCard from './ProjectCard.jsx';
import ProjetoImg from '../img/projeto.png';

// Array extraído do seu script.js original
const projetosData = [
  {
    titulo: 'Meu Portfólio',
    imagem: ProjetoImg,
    url: '#'
  },
  {
    titulo: 'Meu Portfólio React',
    imagem: ProjetoImg,
    url: '#'
  }
];

function Projects() {
  return (
    <section id="projetos">
      <div className="titulo-area">
        <h2>Projetos</h2>
        <span className="traco-decorativo"></span>
      </div>
      <div className="grid-trabalhos" id="container-trabalhos">
        {projetosData.map((projeto, index) => (
          <ProjectCard key={index} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;