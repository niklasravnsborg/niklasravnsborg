import React from 'react'
import { Flex, Box, Image } from 'theme-ui'
import lotus from '../../images/lotus.svg'

import Container from '../Container'
import Link from '../Link'

const Footer = () => (
  <Box
    as="footer"
    my={5}
    sx={{
      a: {
        color: 'inherit',
        borderBottom: `1px solid`,
        borderColor: 'dark',
      },
    }}
  >
    <Container>
      <Flex mb={3}>
        <Image
          src={lotus}
          sx={{
            maxWidth: 60,
            margin: '0 auto',
            opacity: 0.3,
          }}
        />
      </Flex>
      <Flex
        mx={-2}
        mb={5}
        sx={{
          flexWrap: 'wrap',
          justifyContent: ['left', 'center'],
          opacity: 0.5,
        }}
      >
        <Box px={2}>
          <Link to="/">start</Link>
        </Box>
        <Box px={2}>
          <Link to="mailto:hej@niklasravnsborg.com">mail</Link>
        </Box>
        <Box px={2}>
          <Link to="/imprint/">impressum</Link>
        </Box>
      </Flex>
      <Flex
        sx={{
          margin: '0 auto',
          textAlign: 'center',
          maxWidth: '32rem',
          opacity: 0.5,
        }}
      >
        Diese Website trackt Dich nicht und kommt ohne Cookies aus.
        <br />
        Ich verwende ein datenschutzfreundliches Analysetool (Plausible), um
        anonyme Nutzungsdaten meiner Website zu erhalten.
      </Flex>
    </Container>
  </Box>
)

export default Footer
