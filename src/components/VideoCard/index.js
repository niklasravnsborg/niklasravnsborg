import React from 'react'
import { Box, Card, Text, AspectImage } from 'theme-ui'

import Ellipsis from '../Ellipsis'

const VideoCard = ({ id, color, name, date, bright }) => (
  <a href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer">
    <Card p={3} bg={color}>
      <AspectImage
        ratio={16 / 9}
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg?fo2`}
        alt={name}
      />
      <Box mt="3" color={bright && 'dark'}>
        <Ellipsis sx={{ fontWeight: '500' }}>{name}</Ellipsis>
        <Text sx={{ fontSize: '0.9em', fontStyle: 'italic', opacity: '.6' }}>
          {date}
        </Text>
      </Box>
    </Card>
  </a>
)

export default VideoCard
