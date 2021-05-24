import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from 'rebass'

import Container from '../Container'

const Footer = () => (
  <Box
    as="footer"
    py={4}
    px={3}
    css={theme => ({
      a: {
        color: 'inherit',
        borderBottom: `1px solid ${theme.colors.dark}`,
      },
    })}
  >
    <Container mt="3">
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        mx="auto"
        css={{ maxWidth: 300, opacity: 0.5 }}
      >
        <Link to="/imprint/">Impressum</Link>
      </Flex>
    </Container>
  </Box>
)

export default Footer
