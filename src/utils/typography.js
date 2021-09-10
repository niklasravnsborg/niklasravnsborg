import Typography from 'typography'

export default new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Kumbh Sans', 'sans-serif'],
  bodyFontFamily: ['Kumbh Sans', 'sans-serif'],
  bodyWeight: 300,
  overrideStyles: _ => ({
    body: {
      overflowX: 'hidden',
      backgroundColor: '#eee',
    },
    p: {
      hyphens: 'auto',
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 'normal',
    },
    'p a, ul a': {
      borderBottom: '1px solid',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color 0.4s',
    },
    '@media only screen and (max-width: 479px)': {
      html: {
        fontSize: '100%',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontSize: '1.2em',
      },
    },
    'img, svg': {
      verticalAlign: 'middle',
    },
  }),
})
