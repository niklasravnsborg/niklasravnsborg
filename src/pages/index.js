import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Socials from '../components/Socials'

import niklas from '../images/niklas.jpg'
import BorderCard from '../components/BorderCard'

const Header = () => (
  <div>
    <img className="mb-3 block size-[90px] rounded-full" src={niklas} />
    <h1 className="mb-3 inline bg-dark box-decoration-clone text-center text-lg font-bold leading-[1.75] text-white shadow-[0_0_0_4px] shadow-dark md:text-xl lg:text-2xl">
      Hej, ich bin Niklas. Zurzeit arbeite ich hauptsächlich an EstateSync. Mich
      beschäftigt die Frage, wie wir in unseren Karrieren auf gesellschaftlichen
      Wandel hinwirken können. Außerdem hab ich Spaß an Video- und
      Musikproduktion.
    </h1>
  </div>
)

const IndexPage = ({ data }) => (
  <Layout title="Über mich">
    <Container className="mb-4">
      <Header />
    </Container>
    <Container className="mb-4 lg:mb-5">
      <Socials />
    </Container>
    <Container className="mb-5 md:mb-6">
      {/* <Heading mb={3}>Writing</Heading> */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.id}>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <BorderCard className="p-3">
              <h3 className="mb-2 text-xl">{node.frontmatter.title}</h3>
              <p className="text-gray-500">{node.frontmatter.date}</p>
            </BorderCard>
          </div>
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
