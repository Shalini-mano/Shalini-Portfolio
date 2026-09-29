import { ArrowDown, ArrowRight, Braces, CodeXml, Database, ExternalLink, MapPin, Server } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-location"><MapPin aria-hidden="true" /> Almere, Netherlands</p>
          <h1>Hi, I’m<br /><span className="accent-text">Shalini.</span></h1>
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-stack">Java <span>•</span> Spring Boot <span>•</span> React <span>•</span> AI</p>
          <p className="hero-description">I build secure, scalable web applications and explore Generative AI to create smarter software solutions.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View Projects <ArrowRight aria-hidden="true" /></a>
            <a className="button" href="https://github.com/Shalini-mano" target="_blank" rel="noreferrer"><CodeXml aria-hidden="true" /> GitHub</a>
            <a className="button" href="https://drive.google.com/file/d/1rstSXlEbL0AI1LyETr9LopAOxjUrmeTE/view?usp=sharing" target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> View CV</a>
          </div>
          <p className="hero-note">OPEN TO FULL STACK · JAVA · BACKEND · AI ROLES</p>
        </div>
        <div className="architecture" aria-label="Abstract web application architecture visualization">
          <div className="architecture-top"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span>application-architecture.ts</span></div>
          <div className="architecture-content">
            <div className="architecture-heading"><div><p>SYSTEM DESIGN / 01</p><strong>Built for dependable flows</strong></div><span className="live-pill">IN PRACTICE</span></div>
            <div className="architecture-flow">
              <div className="flow-node"><Braces aria-hidden="true" /><strong>REST API</strong><span>Spring Boot</span></div>
              <div className="flow-node"><Server aria-hidden="true" /><strong>Service layer</strong><span>Java 17</span></div>
              <div className="flow-node"><Database aria-hidden="true" /><strong>Data stores</strong><span>SQL + NoSQL</span></div>
            </div>
            <div className="code-snippet" aria-label="Example API route">
              <div><span className="code-purple">@GetMapping</span>(<span className="code-green">"/api/v1/rooms"</span>)</div>
              <div><span className="code-blue">public</span> ResponseEntity&lt;RoomList&gt; availableRooms() {'{'}</div>
              <div>&nbsp;&nbsp;<span className="code-blue">return</span> ResponseEntity.ok(roomService.findAvailable());</div>
              <div>{'}'}</div>
            </div>
            <div className="architecture-foot"><span>clear boundaries · tested APIs · secure access</span><span>Explore <ArrowDown aria-hidden="true" /></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero