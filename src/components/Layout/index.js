import React from 'react'
import 'typeface-kumbh-sans'
import { Box } from 'theme-ui'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ title, desc, children, ...props }) => (
  <Box {...props}>
    <Helmet
      defaultTitle="niklasravnsborg"
      titleTemplate="%s – niklasravnsborg"
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
  </Box>
)

export default Layout
