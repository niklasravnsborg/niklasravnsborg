import React from 'react'
import { shade } from 'polished'
import { Box, Card, Text, AspectRatio, Image } from 'theme-ui'

import Ellipsis from '../Ellipsis'

const VideoCard = ({ youtubeId, color, name, date, bright }) => (
  <a href={`https://youtu.be/${youtubeId}`} target="_blank" rel="noreferrer">
    <Card p={3} bg={color}>
      <AspectRatio ratio={16 / 9} bg={shade(0.2, color)}>
        <Image
          alt={name}
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        />
      </AspectRatio>
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
