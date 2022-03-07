import React from 'react'
import { Box, Text, Avatar } from 'theme-ui'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Socials from '../components/Socials'
import theme from '../gatsby-plugin-theme-ui'

import niklas from '../images/niklas.jpg'

const Header = () => (
  <Box>
    <Avatar size={90} mb={3} src={niklas} sx={{ display: 'block' }} />
    <Text
      mb="3"
      as="h1"
      color="white"
      sx={{
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 1.6,
        textAlign: 'center',
        display: 'inline',
        background: theme.colors.dark,
        boxShadow: `0 0 0 5px ${theme.colors.dark}`,
      }}
    >
      Hej, ich bin DevOps Engineer und Software Entrepreneur. Zurzeit arbeite
      ich an Homevoice und EstateSync. Mich beschäftigt die Frage, wie wir
      unsere Karrieren transformieren können, um den Klimawandel zu stoppen.
      Außerdem hab ich Spaß an Video- und Musikproduktion.
    </Text>
  </Box>
)

const IndexPage = () => (
  <Layout title="Über mich">
    <Container mb={4}>
      <Header />
    </Container>
    <Container mb={[4, 6]}>
      <Socials />
    </Container>
  </Layout>
)

export default IndexPage
