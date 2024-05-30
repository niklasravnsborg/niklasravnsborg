import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import VideoCard from '../components/VideoCard'

const VideosPage = ({ data }) => (
  <Layout title="Videoprojekte">
    <Container className="pb-4">
      <h2 className="mb-3 text-xl">Videoprojekte</h2>
      <p className="mb-4 text-dark/80 md:text-lg/relaxed">
        Beim Filmemachen kommen für mich mehrere Leidenschaften zusammen:
        Visuelles, Musik und die gemeinsame Arbeit mit kreativen Machern mit
        Spaß am Schaffensprozess. Eine nicht ganz vollständige Übersicht der
        Projekte, an denen ich mitgewirken durfte:
      </p>
      <div className="gird-cols-1 -m-2 grid auto-cols-fr gap-1 md:grid-cols-2 xl:-m-3">
        {data.allVideosYaml.nodes.map(props => (
          <div className="p-2 xl:p-3" key={props.youtubeId}>
            <VideoCard {...props} />
          </div>
        ))}
      </div>
    </Container>
  </Layout>
)

export default VideosPage

export const query = graphql`
  query {
    allVideosYaml(filter: { hide: { ne: true } }) {
      nodes {
        name
        youtubeId
        date
        color
        bright
      }
    }
  }
`
