import React from 'react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5'

const Social = ({ href, color, reactIcon }) => (
  <div className="p-2">
    <a
      target="_blank"
      href={href}
      className="inline-flex items-center justify-center rounded-full p-1.5 text-white"
      style={{ backgroundColor: color }}
    >
      {reactIcon({ className: 'text-[.9em]' })}
    </a>
  </div>
)

export default () => (
  <div className="m-[-8px] flex flex-wrap">
    <Social
      href="https://github.com/niklasravnsborg/"
      color="black"
      reactIcon={IoLogoGithub}
    />
    <Social
      href="https://linkedin.com/in/niklasravnsborg/"
      color="#0b66c2"
      reactIcon={IoLogoLinkedin}
    />
    <Social
      href="https://twitter.com/niklasravnsborg/"
      color="#1ea1f1"
      reactIcon={IoLogoTwitter}
    />
    <Social
      href="https://instagram.com/niklasravnsborg/"
      color="#C13584"
      reactIcon={IoLogoInstagram}
    />
  </div>
)
