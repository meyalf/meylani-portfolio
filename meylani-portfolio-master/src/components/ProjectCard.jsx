import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="proj-card">
      <div className="proj-thumb">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="proj-thumb-placeholder">{project.title}</div>
        )}
      </div>
      <div className="proj-info">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="proj-tags">
         {project.tags?.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
        </div>
      </div>
      <span className="proj-arrow">→</span>
    </Link>
  );
}
