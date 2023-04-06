import React from 'react'
import { graphql, Link } from 'gatsby'
import { Box, Text, Avatar, Heading } from 'theme-ui'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Socials from '../components/Socials'
import theme from '../gatsby-plugin-theme-ui'

import niklas from '../images/niklas.jpg'
import BorderCard from '../components/BorderCard'

const Header = () => (
  <Box>
    <Avatar size={90} mb={3} src={niklas} sx={{ display: 'block' }} />
    <Text
      mb="3"
      as="h1"
      color="white"
      sx={{
        fontWeight: 'bold',
        fontSize: [20, 26],
        lineHeight: 1.6,
        textAlign: 'center',
        display: 'inline',
        background: theme.colors.dark,
        boxShadow: `0 0 0 5px ${theme.colors.dark}`,
        boxDecorationBreak: 'clone',
      }}
    >
      Hej, ich bin Niklas. Zurzeit arbeite ich hauptsächlich an EstateSync.
      Mich beschäftigt die Frage, wie wir in unseren Karrieren auf
      gesellschaftlichen Wandel hinwirken können. Außerdem hab ich Spaß an Video- und Musikproduktion.
    </Text>
  </Box>
)

const IndexPage = ({ data }) => (
  <Layout title="Über mich">
    <Container mb={4}>
      <Header />
    </Container>
    <Container mb={[4, 5]}>
      <Socials />
    </Container>
    <Container mb={[4, 5, 6]}>
      {/* <Heading mb={3}>Writing</Heading> */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.id}>
          <Box sx={{ width: [null, (1 / 2) * 100 + '%', (1 / 3) * 100 + '%'] }}>
            <BorderCard p={3}>
              <Heading as="h3" mb={2} fontSize=".8em">
                {node.frontmatter.title}
              </Heading>
              <Text sx={{ textAlign: 'right' }} color="gray">
                {node.frontmatter.date}
              </Text>
            </BorderCard>
          </Box>
        </Link>
      ))}
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
