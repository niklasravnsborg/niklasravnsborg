import React from 'react'
import Button from '../Button'

import Container from '../Container'

const Header = ({ pathname }) => {
  const HeaderLink = ({ to, color, children }) => {
    const isCurrent = pathname === to

    return (
      <Button
        variant="colored"
        color={isCurrent ? color : 'unset'}
        size="large"
        children={<a href={to} children={children} />}
        asChild={true}
      />
    )
  }

  return (
    <header className="my-4 lg:py-2">
      <Container py="3">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mb-3 w-full md:mb-0 md:w-auto">
            <a href="/">
              <div className="text-center text-xl font-bold lg:text-left">
                niklas ravnsborg
              </div>
            </a>
          </div>
          <div className="w-full max-w-[26rem] md:w-[70%]">
            <div className="flex justify-around lg:justify-between">
              <HeaderLink to="/" color="blue" children="Über mich" />
              <HeaderLink
                to="/experience/"
                color="green"
                children="Erfahrung"
              />
              <HeaderLink to="/projects/" color="orange" children="Videos" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
