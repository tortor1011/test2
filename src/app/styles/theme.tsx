import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1a237e' }, // สีน้ำเงินเข้มจากภาพ
    secondary: { main: '#ff9800' }, // สีส้ม
  },
  typography: {
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    fontFamily: 'Manrope, sans-serif',
  },
});
theme.typography.h2 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};

export default theme;