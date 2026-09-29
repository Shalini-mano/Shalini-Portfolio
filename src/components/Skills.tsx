import { Braces, Cloud, Database, Radio, Server, Sparkles } from 'lucide-react'
import { skillGroups } from '../data/skills'

const icons = { server: Server, browser: Braces, database: Database, cloud: Cloud, radio: Radio, sparkles: Sparkles }

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="section-heading"><p className="section-kicker">Tools of the trade</p><h2 className="section-title">A practical, <span className="accent-text">full-stack toolkit.</span></h2><p className="section-intro">Strong backend fundamentals, paired with modern web development and a growing AI practice.</p></div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return <article className="skill-group" key={group.category}><div className="skill-group-heading"><span className="skill-icon"><Icon aria-hidden="true" /></span><h3>{group.category}</h3></div><div className="skill-chips">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></article>
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills