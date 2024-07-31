import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141313',
    },
  },
  typography: {
    fontFamily: 'Lexend Deca, sans-serif',
  },
});

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Box sx={{ width: '70%', margin: '0 auto' }}>
      <Component {...pageProps} />
    </Box>
  </ThemeProvider>
);

export default MyApp;