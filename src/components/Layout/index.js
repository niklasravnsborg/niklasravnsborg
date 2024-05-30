import React from 'react'
import Helmet from 'react-helmet'
import '@fontsource/kumbh-sans'
import '@fontsource/kumbh-sans/700.css'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ title, desc, children, ...props }) => (
  <div {...props}>
    <Helmet
      defaultTitle="niklas ravnsborg"
      titleTemplate="%s – niklas ravnsborg"
      title={title}
      meta={[
        { name: 'description', content: desc },
        { name: 'og:image', content: '/open_graph.jpg' },
        { name: 'og:locale', content: 'de_DE' },
        { name: 'og:type', content: 'website' },
      ]}
      htmlAttributes={{ lang: 'de' }}
    />
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
