import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Text } from 'rebass'

import Container from '../Container'
import UnderlineLink from '../UnderlineLink'

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
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mx={-2}
      >
        <Box px="2">
          <Link to="/">
            <Text fontWeight="bold" fontSize={22} color="blue">
              niklasravnsborg
            </Text>
          </Link>
        </Box>
        <Box px="2">
          <Flex mx={[-2, -3]}>
            <UnderlineLink mx={[2, 3]}>
              <Link to="/videos/" children="Videos" />
            </UnderlineLink>
            <UnderlineLink mx={[2, 3]}>
              <a href="mailto:hey@niklasravnsborg.com">Kontakt</a>
            </UnderlineLink>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header
