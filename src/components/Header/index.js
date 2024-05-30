import React from 'react'
import Button from '../Button'
import { Link as GatsbyLink } from 'gatsby'

import Container from '../Container'

const HeaderLink = ({ to, color, children }) => {
  return (
    <GatsbyLink
      to={to}
      getProps={({ isCurrent }) => ({
        children: (
          <Button
            variant="colored"
            color={isCurrent ? color : 'unset'}
            size="large"
            children={children}
          />
        ),
      })}
    />
  )
}

const Header = () => (
  <header className="my-4 lg:py-2">
    <Container py="3">
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="mb-3 w-full md:mb-0 md:w-auto">
          <GatsbyLink to="/">
            <div className="text-center text-xl font-bold lg:text-left">
              niklas ravnsborg
            </div>
          </GatsbyLink>
        </div>
        <div className="w-full max-w-[26rem] md:w-[70%]">
          <div className="flex justify-around lg:justify-between">
            <HeaderLink to="/" color="blue" children="Über mich" />
            <HeaderLink to="/experience/" color="green" children="Erfahrung" />
            <HeaderLink to="/projects/" color="orange" children="Videos" />
          </div>
        </div>
      </div>
    </Container>
  </header>
)

export default Header
