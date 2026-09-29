import { ArrowUpRight, Check, CodeXml } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = { project: Project }

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card${project.featured ? ' featured' : ''}`}>
      <div className="project-topline"><span className="project-type">{project.category} / Project</span>{project.featured ? <span className="featured-label">FEATURED</span> : project.stage ? <span className="featured-label">{project.stage}</span> : null}</div>
      <div className="project-main">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <ul className="project-features">{project.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>
      <div className="project-technologies" aria-label="Technologies">{project.technologies.map((technology) => <span className="technology-chip" key={technology}>{technology}</span>)}</div>
      <div className="project-links"><a className="project-link" href="https://github.com/Shalini-mano" target="_blank" rel="noreferrer">GitHub profile <CodeXml aria-hidden="true" /><ArrowUpRight aria-hidden="true" /></a></div>
    </article>
  )
}

export default ProjectCard