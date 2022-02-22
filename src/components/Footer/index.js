import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from 'theme-ui'

import Container from '../Container'

const Footer = () => (
  <Box
    as="footer"
    py={4}
    px={3}
    sx={{
      a: {
        color: 'inherit',
        borderBottom: `1px solid`,
        borderColor: 'dark',
      },
    }}
  >
    <Container mt="3">
      <Flex
        mx="auto"
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          maxWidth: 250,
          opacity: 0.5,
        }}
      >
        <a href="mailto:hey@niklasravnsborg.com">Kontakt</a>
        <Link to="/imprint/">Impressum</Link>
      </Flex>
    </Container>
  </Box>
)

export default Footer
