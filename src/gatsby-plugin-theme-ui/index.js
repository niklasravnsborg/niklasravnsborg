const buttonStyles = {
  paddingTop: 10,
  paddingBottom: 8,
  borderRadius: 10,
}

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: 'white',
    text: 'white',
    accent: '#ffe51f',
    lightgray: '#f6f6ff',
    dark: '#162135',
    green: '#33b733',
    blue: '#2A73FF',
    orange: '#ffa326',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'Kumbh Sans, sans-serif',
    heading: 'Kumbh Sans, sans-serif',
    body: 'Kumbh Sans, sans-serif',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  buttons: {
    primary: {
      ...buttonStyles,
      color: 'dark',
      border: '1px solid',
      borderColor: 'dark',
    },
    header: {
      ...buttonStyles,
      backgroundColor: 'transparent',
      color: 'gray',
      fontWeight: 'bold',
    },
  },
  cards: {
    primary: {
      boxShadow: 'large',
      borderRadius: 10,
      color: 'white',
      backgroundColor: 'dark',
    },
  },
}

export default theme
