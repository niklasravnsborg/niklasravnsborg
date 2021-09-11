import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'rebass'

import Layout from '../components/Layout'
import Container from '../components/Container'
import VideoCard from '../components/VideoCard'

const VideosPage = ({ data }) => (
  <Layout>
    <Box>
      <Container>
        <Flex flexWrap="wrap" m={[-2, null, -3]}>
          {data.contentYaml.videos.map(props => (
            <Box width={[1, 1 / 2]} p={[2, null, 3]} key={props.id}>
              <VideoCard {...props} />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  </Layout>
)

export default VideosPage

export const query = graphql`
  query {
    contentYaml {
      videos {
        name
        id
        date
        color
        bright
      }
    }
  }
`
