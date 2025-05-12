import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#1a237e',
        color: 'white',
        py: 2,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2025 Pineapple Youth Studio. All rights reserved.
      </Typography>
    </Box>
  );
}