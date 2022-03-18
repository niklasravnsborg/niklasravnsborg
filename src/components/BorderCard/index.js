import React from 'react'
import { Box } from 'theme-ui'

const borderThinkness = 4
const borderRadius = 10

const BorderCard = props => (
  <Box
    sx={theme => ({
      background: 'blue',
      padding: borderThinkness + 'px',
      backgroundColor: '#4158D0',
      backgroundImage: `linear-gradient(to bottom right, ${theme.colors.blue} 0%, ${theme.colors.green} 100%)`,
      borderRadius: borderRadius,
      height: '100%',
    })}
  >
    <Box
      bg="white"
      sx={{
        borderRadius: borderRadius - borderThinkness,
      }}
      {...props}
    />
  </Box>
)

export default BorderCard
