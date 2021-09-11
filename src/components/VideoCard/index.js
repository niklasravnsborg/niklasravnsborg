import React from 'react'
import { Box, Card, Text } from 'rebass'

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

export default ({ id, color, name, date, bright }) => (
  <a href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer">
    <Card p={3} bg={color}>
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
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg?fo2`}
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
)
