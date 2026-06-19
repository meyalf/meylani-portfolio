import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="section" style={{ paddingTop:160, textAlign:'center' }}>
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-dark" style={{ marginTop:20, display:'inline-flex' }}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="detail-hero">
        <div className="wrap">
          <Link to="/projects" className="detail-back">← All Projects</Link>
          <p className="section-tag">{project.tagline}</p>
          <h1 className="detail-title">{project.title}</h1>
          <p className="section-desc" style={{ maxWidth:600 }}>{project.desc}</p>

          <div className="detail-meta">
            <div className="detail-meta-item">Year<strong>{project.year}</strong></div>
            <div className="detail-meta-item">Role<strong>{project.role}</strong></div>
            {project.live && (
              <div className="detail-meta-item">Live Site
                <strong><a href={project.live} target="_blank" rel="noreferrer" style={{ color:'var(--accent)' }}>Visit Site →</a></strong>
              </div>
            )}
            {project.github && (
              <div className="detail-meta-item">Repository
                <strong><a href={project.github} target="_blank" rel="noreferrer" style={{ color:'var(--accent)' }}>View on GitHub →</a></strong>
              </div>
            )}
            {project.figma && (
              <div className="detail-meta-item">Design File
                <strong><a href={project.figma} target="_blank" rel="noreferrer" style={{ color:'var(--accent)' }}>View on Figma →</a></strong>
              </div>
            )}
            {project.report && (
              <div className="detail-meta-item">Report
                <strong><a href={project.report} target="_blank" rel="noreferrer" style={{ color:'var(--accent)' }}>View Report →</a></strong>
              </div>
            )}
          </div>

          <div className="hero-actions" style={{ marginTop:32 }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-dark">Live Site ↗</a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark">View Code</a>
            )}
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noreferrer" className="btn btn-dark">View on Figma</a>
            )}
            {project.report && (
              <a href={project.report} target="_blank" rel="noreferrer" className="btn btn-outline">View Report</a>
            )}
            {project.figmaOnly && !project.figma && (
              <span className="btn btn-outline" style={{ cursor:'default', opacity:0.6 }}>Figma case study coming soon</span>
            )}
            {!project.github && !project.figmaOnly && !project.live && (
              <span className="btn btn-outline" style={{ cursor:'default', opacity:0.6 }}>Repository coming soon</span>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="detail-body">
            <h2>About the project</h2>
            <p>{project.about}</p>

            <h2>Tech Stack</h2>
            {Object.entries(project.techStack).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom:20 }}>
                <p style={{ fontSize:'0.8rem', fontWeight:600, color:'var(--ink-soft)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.05em' }}>{cat}</p>
                <div className="tech-grid" style={{ marginTop:0, marginBottom:0 }}>
                  {items.map(item => <span key={item} className="tech-pill">{item}</span>)}
                </div>
              </div>
            ))}

            <h2 style={{ marginTop:40 }}>Key Features</h2>
            <ul>
              {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}