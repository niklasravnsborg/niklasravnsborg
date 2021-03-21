import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box, Card, Text } from 'rebass'

import Layout from '../components/Layout'

const Ellipsis = props => (
  <Text
    css={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
    {...props}
  />
)

const IndexPage = ({ data }) => (
  <Layout>
    <Box>
      <Flex flexWrap="wrap" m={[2, null, 3]}>
        {data.contentYaml.videos.map(({ name, id, date, color, bright }) => (
          <Box width={[1, 1 / 2, null, 1 / 3]} p={[2, null, 3]} key={id}>
            <a href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer">
              <Card variant="card" p={3} bg={color}>
                <Box
                  borderRadius={1}
                  css={{
                    width: '100%',
                    paddingBottom: '56.25%',
                    position: 'relative',
                  }}
                >
                  <img
                    css={{ position: 'absolute', width: '100%' }}
                    src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                    alt={name}
                  />
                </Box>
                <Box mt="3" color={bright && 'dark'}>
                  <Ellipsis fontWeight="500" title={name}>
                    {name}
                  </Ellipsis>
                  <Text fontSize=".9em" fontStyle="italic" opacity=".6">
                    {date}
                  </Text>
                </Box>
              </Card>
            </a>
          </Box>
        ))}
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage

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
