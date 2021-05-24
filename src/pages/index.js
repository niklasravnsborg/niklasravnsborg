import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Card, Text } from 'rebass'

import Layout from '../components/Layout'
import Container from '../components/Container'

const Highlight = props => (
  <Text
    {...props}
    sx={{ display: 'inline-block', backgroundColor: 'blue', color: 'white' }}
  />
)

const IndexPage = () => (
  <Layout>
    <Box>
      <Container mb="4">
        <Card p="5" color="black" bg="white">
          <Text fontSize={29} fontWeight="bold">
            Ich mag es Menschen zusammen zu bringen, um gemeinsam ambitionierte
            Projekte auf die Beine zu stellen.
          </Text>
        </Card>
      </Container>
      <Container>
        <Flex flexWrap="wrap" m={-3}>
          <Box width={1 / 4} p={3}>
            <Link target="_blank" href="https://github.com/niklasravnsborg/">
              <Card py={40} bg="black" color="white" textAlign="center">
                GitHub
              </Card>
            </Link>
          </Box>
          <Box width={1 / 4} p={3}>
            <Link
              target="_blank"
              href="https://linkedin.com/in/niklasravnsborg/"
            >
              <Card py={40} bg="#0b66c2" color="white" textAlign="center">
                LinkedIn
              </Card>
            </Link>
          </Box>
          <Box width={1 / 4} p={3}>
            <Link target="_blank" href="https://twitter.com/niklasravnsborg/">
              <Card py={40} bg="#1ea1f1" color="white" textAlign="center">
                Twitter
              </Card>
            </Link>
          </Box>
          <Box width={1 / 4} p={3}>
            <Link target="_blank" href="https://instagram.com/niklasravnsborg/">
              <Card py={40} bg="#C13584" color="white" textAlign="center">
                Instagram
              </Card>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
