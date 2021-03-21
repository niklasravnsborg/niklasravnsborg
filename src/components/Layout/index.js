import React from 'react'
import 'typeface-montserrat'
import { Box } from 'rebass'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'

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
      {children}
    </Box>
  </ThemeProvider>
)

export default Layout
