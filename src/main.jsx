import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  ['React JS','Frontend'], ['JavaScript','Frontend'], ['HTML','Frontend'], ['CSS','Frontend'],
  ['REST APIs','Backend integration'], ['Java','Programming'], ['SQL','Database'], ['GitHub','Version control'], ['UI/UX','Figma']
];

const projects = [
  { n:'01', title:'Erupta Symposium Website', text:'A responsive React web application for managing event schedules and registrations, with dynamic event listings, registration forms and smooth navigation across devices.', tags:['React JS','JavaScript','CSS','Responsive Design'] },
  { n:'02', title:'E-Commerce Website', text:'A responsive React e-commerce application with product listings, product details, shopping cart functionality and user-friendly navigation.', tags:['React JS','JavaScript','CSS','REST APIs'] },
  { n:'03', title:'React CRUD User Management', text:'A user management application implementing Create, Read, Update and Delete operations with REST API integration and a responsive interface.', tags:['React JS','REST APIs','CRUD','JavaScript'] }
];

function App(){
  const [menu,setMenu]=useState(false); const [active,setActive]=useState('home');
  useEffect(()=>{
    const ids=['home','About','Skills','Projects','Journey','Contact'];
    const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-35% 0px -55% 0px'});
    ids.forEach(id=>{const el=document.getElementById(id); if(el) obs.observe(el)}); return()=>obs.disconnect();
  },[]);
  const close=()=>setMenu(false);
  return <>
    <div className="noise" />
    <header className="header"><nav className="nav container">
      <a href="#home" className="brand" onClick={close}>Asfak<span>.Dev</span></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?'×':'☰'}</button>
      <div className={`navlinks ${menu?'show':''}`}>
        {['About','Skills','Projects','Journey','Contact'].map(x=><a className={active===x?'active':''} key={x} href={'#'+x} onClick={close}>{x}</a>)}
      </div>
    </nav></header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="status"><i/> Open to frontend developer roles</div>
          <p className="kicker">Hello, I'm</p>
          <h1>Asfak <span>Ahamed</span><br/><strong>Frontend Developer.</strong></h1>
          <p className="hero-text">A Computer Science graduate focused on building responsive, user-friendly web applications with React.js, JavaScript and modern frontend technologies.</p>
          <div className="actions"><a className="btn primary" href="#projects">View Projects <b>↗</b></a><a className="btn" href="/Asfak_Ahamed_CV.pdf" download>Download Resume ↓</a><a className="btn" href="https://linkedin.com/in/asfak-ahamed7" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <div className="quick"><span>📍 Madurai, Tamil Nadu</span><span>🎓 B.E. CSE · 7.8 CGPA</span></div>
        </div>
        <div className="hero-card">
          <div className="orb orb1"/><div className="orb orb2"/>
          <div className="code-window"><div className="window-top"><span/><span/><span/><em>developer.js</em></div><pre><code><b>const</b> developer = {'{'}\n  name: <mark>"Asfak Ahamed A"</mark>,\n  role: <mark>"Frontend Developer"</mark>,\n  stack: [<mark>"React"</mark>, <mark>"JavaScript"</mark>],\n  focus: <mark>"Clean UI + UX"</mark>,\n  mindset: <mark>"Build. Learn. Improve."</mark>\n{'}'}</code></pre></div>
          <div className="floating-card"><span>React.js</span><small>building interfaces</small></div>
        </div>
      </section>

      <section id="About" className="section container"><SectionTitle num="01" title="About me" sub="A graduate who enjoys turning ideas into interfaces."/><div className="about-grid"><div className="about-copy"><p>I recently completed my B.E. in Computer Science and Engineering from Sethu Institute of Technology. I'm focused on frontend development and enjoy creating responsive interfaces that are simple to use and easy to maintain.</p><p>My practical work includes React applications, REST API integration, e-commerce functionality and CRUD operations. My UI/UX training also helps me think about the experience behind the code.</p><p>Outside development, I served as a Class Lead in the Rotaract Club, where I coordinated members and supported event execution.</p></div><div className="stats"><Stat n="7.8" l="CGPA · CSE"/><Stat n="2026" l="Graduate"/><Stat n="3" l="React projects"/><Stat n="3" l="Certifications"/></div></div></section>

      <section id="Skills" className="section alt"><div className="container"><SectionTitle num="02" title="Skills & tools" sub="Technologies I use to build and learn."/><div className="skill-grid">{skills.map(([name,type])=><div className="skill" key={name}><div><strong>{name}</strong><small>{type}</small></div><span>↗</span></div>)}</div></div></section>

      <section id="Projects" className="section container"><SectionTitle num="03" title="Featured projects" sub="A few things I've built with React and web technologies."/><div className="projects">{projects.map(p=><article className="project" key={p.n}><div className="project-no">{p.n}</div><div className="project-body"><div className="project-top"><h3>{p.title}</h3><span>↗</span></div><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>

      <section id="Journey" className="section alt"><div className="container"><SectionTitle num="04" title="Education & journey" sub="The experiences that shaped my development path."/><div className="timeline"><Timeline year="2022 — 2026" title="B.E. Computer Science & Engineering" text="Sethu Institute of Technology · CGPA 7.6"/><Timeline year="Training" title="Full Stack Web Development" text="OCTANET · Novitech R&D Pvt Ltd"/><Timeline year="Training" title="UI/UX Design" text="Novitech R&D Pvt Ltd"/><Timeline year="Certifications" title="Full Stack Development · Cloud Computing · Core Java" text="Udemy & NPTEL"/><Timeline year="Leadership" title="Class Lead · Rotaract Club" text="Coordinated members and supported event execution."/></div></div></section>

      <section id="Contact" className="section container"><div className="contact-card"><div><span className="eyebrow">05 / Contact</span><h2>Let's build something<br/><span>useful together.</span></h2><p>I'm currently looking for frontend developer opportunities where I can contribute, learn and grow.</p></div><div className="contact-actions"><a className="contact-link" href="mailto:asfak18102004@gmail.com"><small>Email</small><b>asfak18102004@gmail.com ↗</b></a><a className="contact-link" href="tel:+917418685512"><small>Phone</small><b>+91 74186 85512 ↗</b></a><a className="contact-link" href="https://linkedin.com/in/asfak-ahamed7" target="_blank" rel="noreferrer"><small>LinkedIn</small><b>linkedin.com/in/asfak-ahamed7 ↗</b></a></div></div></section>
    </main>
    <footer><div className="container"><span>© 2026 Asfak Ahamed A</span><span>Built with React · Madurai, India</span></div></footer>
  </>
}
function SectionTitle({num,title,sub}){return <div className="section-title"><span>{num} /</span><h2>{title}</h2><p>{sub}</p></div>}
function Stat({n,l}){return <div className="stat"><strong>{n}</strong><span>{l}</span></div>}
function Timeline({year,title,text}){return <div className="timeline-item"><div className="dot"/><div><span>{year}</span><h3>{title}</h3><p>{text}</p></div></div>}
createRoot(document.getElementById('root')).render(<App/>);
