import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'theme-ui'

import Container from '../Container'
import Socials from '../Socials'

const Header = () => (
  <Box as="header" py={[null, 2]} mb="4">
    <Container py="3">
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Link to="/">
            <Text sx={{ fontWeight: 'bold', fontSize: 22 }}>
              niklas ravnsborg
            </Text>
          </Link>
        </Box>
        <Box>
          <Socials />
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header
