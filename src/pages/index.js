import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Card, Text } from 'theme-ui'

import Layout from '../components/Layout'
import Container from '../components/Container'
import VideoCard from '../components/VideoCard'
import ProjectCard from '../components/ProjectCard'

const Highlight = props => (
  <Text
    {...props}
    sx={{ display: 'inline-block', backgroundColor: 'blue', color: 'white' }}
  />
)

const IndexPage = () => (
  <Layout>
    <Container wide mb="4">
      <Card p="5" py="6" color="black" bg="white">
        <Box sx={{ width: (2 / 3) * 100 + '%', maxWidth: 580 }}>
          <Text
            mb="3"
            as="h1"
            color="white"
            sx={{
              fontWeight: 'bold',
              fontSize: 38,
              lineHeight: 1.6,
              textAlign: 'center',
              display: 'inline',
              background: 'black',
              boxShadow: '10px 0 0 black, -10px 0 0 black',
            }}
          >
            Ich arbeite an Startups, Software und visuellen Medien
          </Text>
        </Box>
      </Card>
    </Container>
    <Container wide mb="4">
      <Card p="5" color="black" bg="white">
        <Flex m={-3}>
          <Box sx={{ width: (2 / 5) * 100 + '%' }} p={3}>
            <Text fontSize={29} mb="3" as="h2">
              Projekte
            </Text>
            <Text mb="3" as="p">
              Ich habe irgendwie schon immer an irgendwelchen Projekten
              gebastelt. Ist nicht alles im Leben ein Projekt?
            </Text>
          </Box>
          <Box sx={{ width: (3 / 5) * 100 + '%' }} p={3}>
            <Flex m={-2} sx={{ flexWrap: 'wrap', alignItems: 'stretch' }}>
              <Box sx={{ width: '50%' }} p={2}>
                <ProjectCard
                  name="Homevoice"
                  tags="DevOps Engineering, System Administration"
                  color="#ff0066"
                />
              </Box>
              <Box sx={{ width: '50%' }} p={2}>
                <ProjectCard
                  name="EstateSync"
                  tags="Software Architektur, Kundensupport"
                  color="#303846"
                />
              </Box>
              <Box sx={{ width: '50%' }} p={2}>
                <ProjectCard
                  name="Grüncool"
                  tags="Teamkoordination, Eventplanung"
                  color="#648a4a"
                />
              </Box>
              <Box sx={{ width: '50%' }} p={2}>
                <ProjectCard
                  name="Kengumedia"
                  tags="Webdesign, Videoproduktion"
                  color="#e6ad43"
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Container>
    <Container wide mb="4">
      <Card p="5" color="black" bg="white">
        <Flex m={-3}>
          <Box sx={{ width: (2 / 5) * 100 + '%' }} p={3}>
            <Text fontSize={29} mb="3" as="h2">
              Videos
            </Text>
            <Text mb="3" as="p">
              Beim Filmemachen kommen für mich mehrere Leidenschaften zusammen:
              Musik, Visuelles und die gemeinsame Arbeit im Team.
            </Text>
          </Box>
          <Box sx={{ width: (3 / 5) * 100 + '%' }} p={3}>
            <Flex m={-2} sx={{ flexWrap: 'wrap' }}>
              <Box sx={{ width: '50%' }} p={2}>
                <VideoCard
                  id="ahGLK5vp1Mw"
                  name="Marc mag Musik"
                  date="2021"
                  color="#3c9890"
                />
              </Box>
              <Box sx={{ width: '50%' }} p={2}>
                <VideoCard
                  id="46GiACqo6MQ"
                  name="Fünf bis Dreizehn"
                  date="2017"
                  color="#98281a"
                />
              </Box>
              <Box sx={{ width: '50%' }} p={2}>
                <VideoCard
                  id="JsLIhJGyEtY"
                  name="Wir sind Macher"
                  date="2016"
                  color="#E1A454"
                />
              </Box>
              <Box sx={{ width: '50%' }} p={2}>
                <VideoCard
                  id="SJ-rG8AvLrY"
                  name="Winterwildflecken"
                  date="2015"
                  color="#fdfdfd"
                  bright
                />
              </Box>
            </Flex>
            <Text mt="3" as="p">
              <Link to="/videos/">Alle meine Videos</Link>
            </Text>
          </Box>
        </Flex>
      </Card>
    </Container>
  </Layout>
)

export default IndexPage
