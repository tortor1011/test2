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

export default theme;