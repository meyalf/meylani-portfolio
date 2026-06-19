import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <section className="detail-hero" style={{ borderBottom:'none', paddingBottom:40 }}>
        <div className="wrap">
          <p className="section-tag">Portfolio</p>
          <h1 className="detail-title">All Projects</h1>
          <p className="section-desc">
            A collection of mobile apps, websites, and experiments — built across coursework, internship prep, and personal curiosity.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop:24 }}>
        <div className="wrap">
          <div className="proj-grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
