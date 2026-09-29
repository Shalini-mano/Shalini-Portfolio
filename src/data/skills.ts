export type SkillGroup = {
  category: string
  icon: 'server' | 'browser' | 'database' | 'cloud' | 'radio' | 'sparkles'
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Backend', icon: 'server', skills: ['Java 17', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JWT', 'REST APIs', 'Swagger / OpenAPI'] },
  { category: 'Frontend', icon: 'browser', skills: ['React', 'JavaScript', 'TypeScript'] },
  { category: 'Database', icon: 'database', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Cloud & DevOps', icon: 'cloud', skills: ['AWS fundamentals', 'Docker', 'GitHub Actions', 'Git'] },
  { category: 'Messaging', icon: 'radio', skills: ['Apache Kafka'] },
  { category: 'AI', icon: 'sparkles', skills: ['LLM', 'RAG', 'Vector databases', 'Generative AI'] },
]