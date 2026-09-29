import { Award } from 'lucide-react'
import { certifications, currentTraining } from '../data/education'

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Learning & credentials</p>
          <h2 className="section-title">Education & Professional Training</h2>
        </div>
        <article className="training-card">
          <div className="training-topline">
            <span className="training-status"><span aria-hidden="true" /> Current training</span>
            <span className="training-period">{currentTraining.formatAndPeriod}</span>
          </div>
          <h3>{currentTraining.title}</h3>
          <p className="training-provider">{currentTraining.provider}</p>
          <p className="training-description">{currentTraining.description}</p>
        </article>
        <div className="certifications-block">
          <h3 className="certifications-title">Certifications</h3>
          <ul className="certification-grid">
            {certifications.map((item) => (
              <li className="certification-card" key={item}>
                <Award aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Education