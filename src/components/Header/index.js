import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from 'rebass'

import Container from '../Container'

const Header = () => (
  <Box
    as="header"
    py={[null, 2]}
    mb="4"
    css={{
      width: '100%',
    }}
  >
    <Container py="3">
      <Link to="/">
        <Text fontWeight="bold" fontSize={22}>
          niklasravnsborg
        </Text>
      </Link>
    </Container>
  </Box>
)

export default Header
