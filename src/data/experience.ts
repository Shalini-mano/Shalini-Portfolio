export type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Pega Developer Intern',
    company: 'Swiftrinity',
    location: 'Almere, Netherlands',
    period: 'Dec 2025 – Jan 2026',
    description: 'Contributed to a mortgage application using Pega Constellation and Blueprints, with decision tables, validation rules and SLA configuration.',
  },
  {
    role: 'Pega Developer / Software Associate',
    company: 'EAI Systems',
    location: 'India',
    period: 'Mar 2018 – Jun 2019',
    description: 'Worked on warranty-claim and identity-management applications, supporting application workflows and software delivery.',
  },
  {
    role: 'Application Support Experience',
    company: 'Smart TV applications',
    location: 'Cross-functional engineering teams',
    period: '60+ applications supported',
    description: 'Investigated integration defects, troubleshot application issues and collaborated with engineering teams throughout the software release lifecycle.',
  },
]