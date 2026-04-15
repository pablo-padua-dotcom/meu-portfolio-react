
function ProjectCard({ projeto }) {
  return (
    <article className="card-trabalho">
      <img src={projeto.imagem} alt={projeto.titulo} className="imagem-trabalho" />
      <div className="dados-trabalho">
        <h3>{projeto.titulo}</h3>
        <a href={projeto.url} className="ancora-repositorio">
          Acesse o Repositorio →
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;