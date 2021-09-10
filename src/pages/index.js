import React, { } from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Card, Text } from 'rebass'

import Layout from '../components/Layout'
import Container from '../components/Container'

import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Highlight = props => (
  <Text
    {...props}
    sx={{ display: 'inline-block', backgroundColor: 'blue', color: 'white' }}
  />
)

const Social = ({ href, color, reactIcon }) => (
  <Box p={2}>
    <Link
      target="_blank"
      href={href}
    >
      <Box p={10} bg={color} color="white" sx={{ display: 'inline-flex', borderRadius: '50%' }}>
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
          <Text fontSize={29} mb="3" as="h2">Heyoo Mensch!</Text>
          <Text mb="3" as="p">
            Zwar weiß ich nicht wie Du hier her gekommen bist, aber wo Du schon mal hier bist, schau Dich gerne um.<br/>
            Das ist hier so etwas wie meine digitale Visitenkarte auf der meine Arbeit im Internet ein bisschen gebündelt wird.
          </Text>
          <Box>
            <Flex flexWrap="wrap" m={-2}>
              <Social href="https://github.com/niklasravnsborg/" color="black" reactIcon={IoLogoGithub}/>
              <Social href="https://linkedin.com/in/niklasravnsborg/" color="#0b66c2" reactIcon={IoLogoLinkedin}/>
              <Social href="https://twitter.com/niklasravnsborg/" color="#1ea1f1" reactIcon={IoLogoTwitter}/>
              <Social href="https://instagram.com/niklasravnsborg/" color="#C13584" reactIcon={IoLogoInstagram}/>
            </Flex>
          </Box>
        </Card>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
