import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex } from 'theme-ui'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5'

const Social = ({ href, color, reactIcon }) => (
  <Box p={2}>
    <Link target="_blank" href={href}>
      <Box
        p="6px"
        bg={color}
        color="white"
        sx={{ display: 'inline-flex', borderRadius: '50%' }}
      >
        {reactIcon({ size: '.9em' })}
      </Box>
    </Link>
  </Box>
)

export default () => (
  <Flex flexWrap="wrap" m={-2}>
    <Social
      href="https://github.com/niklasravnsborg/"
      color="black"
      reactIcon={IoLogoGithub}
    />
    <Social
      href="https://linkedin.com/in/niklasravnsborg/"
      color="#0b66c2"
      reactIcon={IoLogoLinkedin}
    />
    <Social
      href="https://twitter.com/niklasravnsborg/"
      color="#1ea1f1"
      reactIcon={IoLogoTwitter}
    />
    <Social
      href="https://instagram.com/niklasravnsborg/"
      color="#C13584"
      reactIcon={IoLogoInstagram}
    />
  </Flex>
)
