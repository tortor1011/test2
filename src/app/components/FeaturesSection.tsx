import { Box, Grid, Typography, Icon } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';

export default function FeaturesSection() {
  return (
    <Box sx={{ p: 5, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        What Pineapple Youth Offers
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <WifiIcon fontSize="large" />
          <Typography variant="h6">Free Wi-Fi</Typography>
          <Typography>Stay connected with our high-speed internet.</Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
}