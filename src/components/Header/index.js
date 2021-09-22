import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from 'theme-ui'

import Container from '../Container'

const Header = () => (
  <Box as="header" py={[null, 2]} mb="4">
    <Container py="3">
      <Link to="/">
        <Text sx={{ fontWeight: 'bold', fontSize: 22 }}>niklasravnsborg</Text>
      </Link>
    </Container>
  </Box>
)

export default Header
