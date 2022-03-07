import React from 'react'
import { Box, Flex, Text, Button } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import Container from '../Container'
import { lighten, transparentize } from 'polished'

const HeaderLink = ({ to, color, ...props }) => {
  return (
    <GatsbyLink
      to={to}
      getProps={({ isCurrent }) => ({
        children: (
          <Button
            px={[4, 3, 4]}
            variant="header"
            sx={{ cursor: 'pointer' }} // TODO: refactor this by not wrapping a button in a link
            bg={isCurrent && transparentize(0.9, lighten(0.2, color))}
            color={isCurrent && color}
            {...props}
          />
        ),
      })}
    />
  )
}

const Header = () => (
  <Box as="header" py={[null, 2]} my="4">
    <Container py="3">
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box mb={[3, 'initial']} sx={{ width: ['100%', 'initial'] }}>
          <GatsbyLink to="/">
            <Text
              sx={{
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: ['center', 'inherit'],
                display: 'block',
              }}
            >
              niklas ravnsborg
            </Text>
          </GatsbyLink>
        </Box>
        <Box
          sx={{
            width: ['100%', '70%'],
            maxWidth: ['initial', '20rem', '26rem'],
          }}
        >
          <Flex sx={{ justifyContent: ['space-around', 'space-between'] }}>
            <HeaderLink to="/" color="blue" children="Über mich" />
            <HeaderLink to="/experience/" color="green" children="Erfahrung" />
            <HeaderLink to="/projects/" color="orange" children="Videos" />
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header
