import { skills } from '../data/projects';

export default function About() {
  return (
    <div>
      <section className="detail-hero" style={{ paddingBottom:60 }}>
        <div className="wrap">
          <p className="section-tag">About Me</p>
          <h1 className="detail-title">Hi, I'm Meylani.</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-photo">
              <img src="/PAS_FOTO_MEY.jpg" alt="Meylani" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 50%' }} />
            </div>
            <div className="about-text">
              <p>
                I'm a 6th-semester Informatics student at Universitas Multimedia Nusantara, splitting my time between writing code and pushing pixels in Figma. I like the moment where a clean design and clean code actually meet — that's usually where I do my best work.
              </p>
              <p>
                My main focus is frontend and mobile development — React, React Native, and increasingly, the UI/UX thinking that goes into making those things feel good to use, not just functional. I've built disaster-reporting apps, fashion discovery apps, sentiment analysis dashboards, and cultural heritage websites — different domains, but the thread connecting them is always: how do I make this clearer, calmer, easier to use?
              </p>
              <p>
                Outside of coursework, I spend time on personal design projects in Figma and I'm always looking for the next thing to build, break, and rebuild better.
              </p>

              <div className="about-fact-grid">
                <div className="about-fact">
                  <p className="about-fact-label">Based in</p>
                  <p className="about-fact-value">Indonesia</p>
                </div>
                <div className="about-fact">
                  <p className="about-fact-label">Studying</p>
                  <p className="about-fact-value">Informatics, UMN</p>
                </div>
                <div className="about-fact">
                  <p className="about-fact-label">Focus</p>
                  <p className="about-fact-value">Frontend & Mobile Dev</p>
                </div>
                <div className="about-fact">
                  <p className="about-fact-label">Also into</p>
                  <p className="about-fact-value">UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop:0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="section-tag">Skills</p>
            <h2 className="section-title">What I bring to the table</h2>
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
    </div>
  );
}