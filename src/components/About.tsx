function About() {
  return (
    <section className="section" id="about">
      <div className="shell about-layout">
        <div><p className="section-kicker">A little about me</p><h2 className="section-title">Grounded in engineering.<br /><span className="accent-text">Curious about what’s next.</span></h2></div>
        <div className="about-copy">
          <p>Full Stack Developer with a strong foundation in Java, Spring Boot and modern web application development, with hands-on experience across backend development, application support and full-stack projects.</p>
          <p>I care about clear APIs, reliable data flows and software that is practical to maintain. Alongside backend engineering, I’m building with React and exploring how Generative AI can make useful products smarter.</p>
          <div className="about-facts"><div className="fact"><strong>Java-first</strong><span>Backend foundations</span></div><div className="fact"><strong>End to end</strong><span>Full-stack perspective</span></div><div className="fact"><strong>AI curious</strong><span>LLM & retrieval</span></div></div>
        </div>
      </div>
    </section>
  )
}

export default About