import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@/styles/globals.css'
import { green } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: green.A400,
      sub: green.A700,
      
    },
    secondary: {
      main: green.A100,
      sub: green[50],
    },
    myWhite: {
      main: '#ffffff'
    },
    depth1: {
      main: green.A700,
    },
    depth2: {
      main: green.A200,
    },
    depth3: {
      main: green.A100
    },
  },
  typography: {
    h1: {
      fontFamily: 'Love Ya Like A Sister, cursive',
    },
    h2: {
      fontFamily: 'Love Ya Like A Sister, cursive',
    },
    h3: {
      fontFamily: 'Love Ya Like A Sister, cursive',
    },
    h4: {
      fontFamily: 'Autour One, cursive',
    },
    h5: {
      fontFamily: 'Autour One, cursive',
    },
    h6: {
      fontFamily: 'Asap, sans-serif',
    },
    body1: {
      fontFamily: 'Asap, sans-serif',
    },
    calc: {
      fontFamily: 'Autour One, cursive',
      fontSize: '40px'
    },
    calc2: {
      fontFamily: 'Love Ya Like A Sister, cursive',
      fontSize: {xs: '20px', sm: '30px', md: '40px'}
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": { // <-- mixing the two classes
            color: '#00e676',
            backgroundColor: "#00c853",
            borderRadius: '7px'
          }
        }
      }
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
