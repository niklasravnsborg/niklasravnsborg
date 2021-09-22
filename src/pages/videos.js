import React from 'react'
import { graphql } from 'gatsby'
import { Grid, Box } from 'theme-ui'

import Layout from '../components/Layout'
import Container from '../components/Container'
import VideoCard from '../components/VideoCard'

const VideosPage = ({ data }) => (
  <Layout>
    <Box>
      <Container>
        <Grid m={[-2, null, -3]} columns={[1, 2]} gap="1">
          {data.contentYaml.videos.map(props => (
            <Box p={[2, null, 3]} key={props.id}>
              <VideoCard {...props} />
            </Box>
          ))}
        </Grid>
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
