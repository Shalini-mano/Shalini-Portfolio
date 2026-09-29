import { Award } from 'lucide-react'
import { education } from '../data/education'

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="shell">
        <div className="section-heading"><p className="section-kicker">Learning & credentials</p><h2 className="section-title">Built on <span className="accent-text">continuous learning.</span></h2></div>
        <ul className="education-list">{education.map((item) => <li key={item}><Award aria-hidden="true" />{item}</li>)}</ul>
      </div>
    </section>
  )
}

export default Education