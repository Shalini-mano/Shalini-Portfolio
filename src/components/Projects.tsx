import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects, type ProjectCategory } from '../data/projects'

const filters: Array<'All' | ProjectCategory> = ['All', 'Backend', 'Full Stack', 'AI']

function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section projects-section" id="projects">
      <div className="shell">
        <div className="section-heading"><p className="section-kicker">Selected work</p><h2 className="section-title">Projects built to <span className="accent-text">solve real problems.</span></h2><p className="section-intro">Backend systems, full-stack workflows and experiments in applied AI.</p></div>
        <div className="project-toolbar"><p className="project-count">SHOWING {String(visibleProjects.length).padStart(2, '0')} PROJECTS</p><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((filter) => <button className="filter-button" type="button" key={filter} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
        <div className="projects-grid" aria-live="polite">{visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
      </div>
    </section>
  )
}

export default Projects