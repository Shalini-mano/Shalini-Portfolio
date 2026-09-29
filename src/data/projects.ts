export type ProjectCategory = 'Backend' | 'Full Stack' | 'AI'

export type Project = {
  name: string
  category: ProjectCategory
  description: string
  technologies: string[]
  features: string[]
  featured?: boolean
  stage?: string
}

export const projects: Project[] = [
  {
    name: 'StayEase',
    category: 'Backend',
    description: 'A hotel reservation platform with secure account access, hotel and room administration, and end-to-end booking workflows.',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Spring Security', 'JWT', 'Docker', 'Swagger / OpenAPI', 'Postman'],
    features: ['Role-based access', 'Booking workflows', 'Dockerized API'],
    featured: true,
  },
  {
    name: 'E-commerce System',
    category: 'Backend',
    description: 'A backend-first commerce service using token-based authentication and MongoDB Atlas for flexible persistence.',
    technologies: ['Spring Boot', 'MongoDB Atlas', 'JWT', 'REST APIs'],
    features: ['JWT authentication', 'REST API design', 'Document persistence'],
  },
  {
    name: 'Inventory API',
    category: 'Backend',
    description: 'A focused API for inventory operations, built around PostgreSQL-backed resources and clean REST endpoints.',
    technologies: ['Spring Boot', 'PostgreSQL', 'REST APIs'],
    features: ['Resource-oriented API', 'Relational persistence', 'Inventory workflows'],
  },
  {
    name: 'Subscription Manager',
    category: 'Backend',
    description: 'A subscription management service with protected endpoints and a MySQL persistence layer.',
    technologies: ['Spring Boot', 'MySQL', 'JWT', 'REST APIs'],
    features: ['JWT-protected APIs', 'Subscription workflows', 'MySQL persistence'],
  },
  {
    name: 'Tracking Management System',
    category: 'Full Stack',
    description: 'A management system for tracking operational progress across a connected application workflow.',
    technologies: [],
    features: ['Progress tracking', 'Management workflows', 'Application delivery'],
  },
  {
    name: 'Applied AI & LLM',
    category: 'AI',
    description: 'An exploration track focused on using retrieval and language models to make software workflows more useful.',
    technologies: ['LLM', 'RAG', 'Vector databases', 'Generative AI'],
    features: ['Retrieval-augmented generation', 'Vector search', 'AI-assisted development'],
    stage: 'Exploration',
  },
]