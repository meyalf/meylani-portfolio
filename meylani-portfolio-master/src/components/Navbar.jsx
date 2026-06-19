import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">Portofolio Meylani</Link>
        <ul className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <a href="/CV_MeylaniAlfatikha_UIUXIntern_FrontendDeveloper.pdf" download className="nav-cta" style={{ display: window.innerWidth > 760 ? 'inline-flex' : 'none' }}>Resume</a>
          <button className="nav-hamburger" onClick={() => setOpen(!open)}>
            <span style={{transform: open ? 'rotate(45deg) translate(4px,4px)' : ''}}/>
            <span style={{opacity: open ? 0 : 1}}/>
            <span style={{transform: open ? 'rotate(-45deg) translate(4px,-4px)' : ''}}/>
          </button>
        </div>
      </div>
    </nav>
  );
}