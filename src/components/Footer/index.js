import React from 'react'
import { Flex, Box } from 'theme-ui'

import Container from '../Container'
import Link from '../Link'

const Footer = () => (
  <Box
    as="footer"
    py={4}
    my={3}
    sx={{
      a: {
        color: 'inherit',
        borderBottom: `1px solid`,
        borderColor: 'dark',
      },
    }}
  >
    <Container>
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: 0.5,
        }}
        mx={-3}
      >
        <Box px={3}>
          <Link to="mailto:hej@niklasravnsborg.com">Kontakt</Link>
        </Box>
        <Box px={3}>
          <Link to="/imprint/">Impressum</Link>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Footer
