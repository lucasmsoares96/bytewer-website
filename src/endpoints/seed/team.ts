import type { Payload } from 'payload'
import type { Media } from '@/payload-types'

export async function seedTeam({
  payload,
  photos,
}: {
  payload: Payload
  photos: {
    teamLucas: Media
    teamSavio: Media
    teamJorge: Media
    teamVictor: Media
  }
}) {
  const { teamLucas, teamSavio, teamJorge, teamVictor } = photos

  const teamMembers = [
    { name: 'Lucas', role: 'CEO & Founder', roleEn: 'CEO & Founder', bio: 'Engenheiro de computação com visão estratégica e experiência internacional.', bioEn: 'Computer engineer with strategic vision and international experience.', photo: teamLucas.id, email: 'lucasmsoares96@gmail.com', linkedin: 'https://www.linkedin.com/in/lucasmsoares96/', github: 'https://github.com/lucasmsoares96', order: 1 },
    { name: 'Sávio', role: 'CTO', roleEn: 'CTO', bio: 'Engenheiro de computação com experiência em desenvolvimento e análise de software.', bioEn: 'Computer engineer with experience in software development and analysis.', photo: teamSavio.id, email: 'saviorodrigues012@gmail.com', github: 'https://github.com/SavioR0', linkedin: 'https://www.linkedin.com/in/sávio-rodrigues-00a281212', order: 2 },
    { name: 'Jorge', role: 'Lead Developer', roleEn: 'Lead Developer', bio: 'Engenheiro de computação full-stack developer.', bioEn: 'Full-stack computer engineer.', photo: teamJorge.id, email: 'jorgevgsouza@gmail.com', github: 'https://github.com/jvsouzx', linkedin: 'https://www.linkedin.com/in/jorgevgsouza', order: 3 },
    { name: 'Victor', role: 'Developer', roleEn: 'Developer', bio: 'Engenheiro de computação full-stack developer.', bioEn: 'Full-stack computer engineer.', photo: teamVictor.id, email: 'victor.vic2009@hotmail.com', github: 'https://github.com/VictorGeralt', linkedin: 'https://www.linkedin.com/in/victorgeralt/', order: 4 },
  ]

  for (const member of teamMembers) {
    const { roleEn, bioEn, ...ptData } = member
    const created = await payload.create({
      collection: 'team',
      locale: 'pt-BR',
      context: { disableRevalidate: true },
      data: ptData,
    })
    await payload.update({
      collection: 'team',
      id: created.id,
      locale: 'en',
      context: { disableRevalidate: true },
      data: { role: roleEn, bio: bioEn },
    })
  }
}
