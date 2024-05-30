import React from 'react'
import lotus from '../../images/lotus.svg'

import Container from '../Container'
import Link from '../Link'

const Footer = () => (
  <footer className="my-5">
    <Container>
      <div className="mb-3 flex justify-center">
        <img
          src={lotus}
          className="mx-auto w-full max-w-14 opacity-30"
          alt="Lotus"
        />
      </div>
      <div className="mx-2 mb-4 flex flex-wrap justify-center opacity-50">
        <div className="px-2">
          <Link to="/" className="border-b border-dark text-current">
            start
          </Link>
        </div>
        <div className="px-2">
          <Link
            to="mailto:hej@niklasravnsborg.com"
            className="border-b border-dark text-current"
          >
            mail
          </Link>
        </div>
        <div className="px-2">
          <Link to="/imprint/" className="border-b border-dark text-current">
            impressum
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-[32rem] text-center opacity-50">
        Diese Website trackt Dich nicht und kommt ohne Cookies aus. Ich verwende
        ein datenschutzfreundliches Analysetool (Plausible), um anonyme
        Nutzungsdaten meiner Website zu erhalten.
      </div>
    </Container>
  </footer>
)

export default Footer
