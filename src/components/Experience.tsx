import { experience } from '../data/experience'

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell experience-layout">
        <div className="section-heading"><p className="section-kicker">Experience</p><h2 className="section-title">A path across <span className="accent-text">products and platforms.</span></h2></div>
        <div className="timeline">
          {experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.role}`}><div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-description">{item.description}</p></article>)}
        </div>
      </div>
    </section>
  )
}

export default Experience