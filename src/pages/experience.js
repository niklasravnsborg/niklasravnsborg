import React from 'react'
import { Box, Heading } from 'theme-ui'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import Container from '../components/Container'

const experiences = [
  {
    title: 'Software Entrepreneur, EstateSync',
    time: 'seit 2020',
    description: `
EstateSync ist eine API für das einfache Inserieren auf Immobilienportalen und das Empfangen von Kontaktanfragen. Dadurch vereinfachen wir Immobiliensoftware-Unternehmen den Markteinstieg deutlich. Das Unternehmen hinter EstateSync habe ich zusammen mit Richard Keil gegründet.

- Konzeption und Dokumentation der RESTful API
- Testbasierte Entwicklung (TDD) in TypeScript + NestJS, PHP, Go
- Erstellung einer dynamisch skalierenden Serverless-Architektur mit diversen Microservices
- Einrichtung von Infrastructure as Code via Pulumi
`,
  },
  {
    title: 'DevOps Engineer, Homevoice',
    time: 'seit 2019',
    description: `
Homevoice ist die moderne Hausverwaltungssoftware. Wir digitalisieren und verschlanken Prozesse, um den Arbeitsalltag auf ein neues Level zu heben. Neben dem Software-Betrieb kümmere ich mich u.a. um interne Dokumentation, Datenschutz und andere teamkulturelle Themen.

- Deployment diverser GCP-Services (u.a. App Engine, Pub/Sub, Cloud Tasks)
- Bau und Verwaltung automatisierter Pipelines via GitHub Actions (Continous integration)
- Mitentwicklung an Frontend (React + Next.js) und Backend (Java + Spring)
- IT-Administration für 18 Personen (SysOps)
`,
  },
  {
    title: 'Fullstack Engineer, Exposify',
    time: '2016 - 2021',
    description: `
Exposify war eine benutzerfreundliche Maklersoftware für mittelständige Immobilienunternehmen. Ich bin Mitgründer des Startups hinter Exposify. Aus den gesammelten Erfahrungen ist später unser API-Service EstateSync entstanden.

- Web- und Frontend-Entwicklung mit Vue.js + Nuxt, React + Gatsby + Rebass, Markdown
- Backend-Entwicklung mit PHP + Laravel
- Deployment eines Kubernetes-Clusters für diverse Docker-Microservices
    `,
  },
  {
    title: 'Webdesigner, Freelance',
    time: '2013 - 2017',
    description: `
- Konzeption statischer und dynamischer Websites
- Programmierung mit diversen Webtechnologien: Jekyll, Pug, Wordpress, Grunt, Gulp, Sass, jQuery
- Nutzung verschiedener Grafik-Tools: Photoshop, Affinity Designer, Figma
`,
  },
]

const ExperiencePage = () => (
  <Layout>
    <Container my={-4}>
      {experiences.map(experience => (
        <Box py={4} key={experience.title}>
          <Heading mb={2}>{experience.title}</Heading>
          <Box mb={3}>{experience.time}</Box>
          <ReactMarkdown>{experience.description}</ReactMarkdown>
        </Box>
      ))}
    </Container>
  </Layout>
)

export default ExperiencePage
