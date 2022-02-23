const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    primary: 'white',
    text: 'white',
    accent: '#ffe51f',
    lightgray: '#f6f6ff',
    dark: '#162135',
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
      backgroundColor: 'transparent',
      color: 'gray',
      borderRadius: 10,
      fontWeight: 'bold',
    },
    outline: {
      color: 'black',
      backgroundColor: 'transparent',
      borderRadius: 0,
      boxShadow: 'inset 0 0 0 2px black',
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
  images: {
    avatar: {
      display: 'block',
      width: 80,
      height: 80,
      borderRadius: 99999,
    },
  },
}

export default theme
