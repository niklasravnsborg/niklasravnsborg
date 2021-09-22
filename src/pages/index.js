import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Card, Text } from 'theme-ui'

import Layout from '../components/Layout'
import Container from '../components/Container'
import VideoCard from '../components/VideoCard'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5'
import ProjectCard from '../components/ProjectCard'

const Highlight = props => (
  <Text
    {...props}
    sx={{ display: 'inline-block', backgroundColor: 'blue', color: 'white' }}
  />
)

const Social = ({ href, color, reactIcon }) => (
  <Box p={2}>
    <Link target="_blank" href={href}>
      <Box
        p={10}
        bg={color}
        color="white"
        sx={{ display: 'inline-flex', borderRadius: '50%' }}
      >
        {reactIcon({ size: '1.2em' })}
      </Box>
    </Link>
  </Box>
)

const IndexPage = () => (
  <Layout>
    <Box>
      <Container mb="4">
        <Card p="5" color="black" bg="white">
          <Text fontSize={29} mb="3" as="h2">
            Heyoo Mensch!
          </Text>
          <Text mb="3" as="p">
            Zwar weiß ich nicht wie Du hier her gekommen bist, aber wo Du schon
            mal hier bist, schau Dich gerne um.
            <br />
            Das ist hier so etwas wie meine digitale Visitenkarte auf der meine
            Arbeit im Internet ein bisschen gebündelt wird.
          </Text>
          <Box>
            <Flex m={-2}>
              <Social
                href="https://github.com/niklasravnsborg/"
                color="black"
                reactIcon={IoLogoGithub}
              />
              <Social
                href="https://linkedin.com/in/niklasravnsborg/"
                color="#0b66c2"
                reactIcon={IoLogoLinkedin}
              />
              <Social
                href="https://twitter.com/niklasravnsborg/"
                color="#1ea1f1"
                reactIcon={IoLogoTwitter}
              />
              <Social
                href="https://instagram.com/niklasravnsborg/"
                color="#C13584"
                reactIcon={IoLogoInstagram}
              />
            </Flex>
          </Box>
        </Card>
      </Container>
    </Box>
    <Box>
      <Container mb="4">
        <Card p="5" color="black" bg="white">
          <Text fontSize={29} mb="3" as="h2">
            Projekte
          </Text>
          <Text mb="3" as="p">
            Ich habe irgendwie schon immer an irgendwelchen Projekten gebastelt.
            Ist nicht alles im Leben ein Projekt? Auf diese bin ich besonders
            stolz:
          </Text>
          <Text mb="3" as="p">
            <Flex m={-2} sx={{ flexWrap: 'wrap', alignItems: 'stretch' }}>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <ProjectCard
                  name="Homevoice"
                  tags="DevOps Engineering, System Administration"
                  color="#ff0066"
                />
              </Box>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <ProjectCard
                  name="EstateSync"
                  tags="Software Architektur, Kundensupport"
                  color="#303846"
                />
              </Box>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <ProjectCard
                  name="Grüncool"
                  tags="Teamkoordination, Eventplanung"
                  color="#648a4a"
                />
              </Box>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <ProjectCard
                  name="Kengumedia"
                  tags="Webdesign, Videoproduktion"
                  color="#e6ad43"
                />
              </Box>
            </Flex>
          </Text>
        </Card>
      </Container>
    </Box>
    <Box>
      <Container mb="4">
        <Card p="5" color="black" bg="white">
          <Text fontSize={29} mb="3" as="h2">
            Videos
          </Text>
          <Text mb="3" as="p">
            Beim Filmemachen kommen für mich mehrere Leidenschaften zusammen:
            Musik, Visuelles und die gemeinsame Arbeit im Team. Das hier sind
            ein paar meiner Lieblinge:
          </Text>
          <Text mb="3" as="p">
            <Flex m={-2} sx={{ flexWrap: 'wrap' }}>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <VideoCard
                  id="ahGLK5vp1Mw"
                  name="Marc mag Musik"
                  date="2021"
                  color="#6ca6a1"
                />
              </Box>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <VideoCard
                  id="46GiACqo6MQ"
                  name="Fünf bis Dreizehn"
                  date="2017"
                  color="#98281a"
                />
              </Box>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <VideoCard
                  id="JsLIhJGyEtY"
                  name="Wir sind Macher"
                  date="2016"
                  color="#E1A454"
                />
              </Box>
              <Box p={2} sx={{ width: ['50%', null, '25%'] }}>
                <VideoCard
                  id="SJ-rG8AvLrY"
                  name="Winterwildflecken"
                  date="2015"
                  color="#fdfdfd"
                  bright
                />
              </Box>
            </Flex>
          </Text>
          <Text mb="3" as="p">
            <Link to="/videos/">Alle meine Videos</Link>
          </Text>
        </Card>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
