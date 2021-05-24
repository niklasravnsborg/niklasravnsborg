import React from 'react'
import 'typeface-kumbh-sans'
import { Box } from 'rebass'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'

import Header from '../Header'
import Footer from '../Footer'

import theme from '../../utils/theme.js'

const Layout = ({ title, desc, children, ...props }) => (
  <ThemeProvider theme={theme}>
    <Box {...props}>
      <Helmet
        defaultTitle="niklasravnsborg Videos"
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
  </ThemeProvider>
)

export default Layout
