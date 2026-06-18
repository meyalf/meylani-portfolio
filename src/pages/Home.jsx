import { Link } from 'react-router-dom';
import { projects, skills } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-eyebrow">
            <span className="hero-dot" /> Available for internships 
          </div>
          <h1 className="hero-title">
            I build interfaces<br />
            that feel <span className="accent">intentional.</span>
          </h1>
          <p className="hero-sub">
            Hi, I'm Meylani — an Informatics student and frontend developer with a soft spot for clean UI/UX. I build mobile apps, websites, and the occasional Figma rabbit hole.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-dark">View Projects</Link>
            <a href="/#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:16 }}>
            <div>
              <p className="section-tag">Selected Work</p>
              <h2 className="section-title">Things I've built</h2>
            </div>
            <Link to="/projects" className="btn btn-outline">All Projects</Link>
          </div>
          <div className="proj-grid">
            {projects.slice(0, 3).map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" style={{ paddingTop:0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="section-tag">Toolkit</p>
            <h2 className="section-title">What I work with</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="skill-card">
                <p className="skill-cat">{cat}</p>
                <div className="skill-list">
                  {items.map(item => <span key={item} className="skill-item">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="wrap">
          <p className="section-tag" style={{ color:'var(--accent-pale)' }}>Get in Touch</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-desc">
            Have a project in mind, an internship opening, or just want to say hi? My inbox is open.
          </p>
          <div className="contact-links">
            <a href="mailto:meylanialfatikha@gmail.com" className="contact-link">meylanialfatikha@gmail.com</a>
            <a href="https://www.linkedin.com/in/meylani-alfatikha-98951128a/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://www.figma.com/design/swMO053v2QiI0bGtNmuutB/PORTOFOLIO---MeylaniAlfatikha?t=5Kp6pnXgWdsR5Whu-0" target="_blank" rel="noreferrer" className="contact-link">Figma</a>
            <a href="https://wa.me/6288905787882" target="_blank" rel="noreferrer" className="contact-link">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
