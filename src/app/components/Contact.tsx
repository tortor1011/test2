import { Box, TextField, Button, Typography } from '@mui/material';

export default function ContactSection() {
  return (
    <Box sx={{ p: 5, bgcolor: '#1a237e', color: 'white' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Get in Touch
      </Typography>
      <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
        <TextField fullWidth label="Name" margin="normal" variant="filled" sx={{ bgcolor: 'white' }} />
        <TextField fullWidth label="Email" margin="normal" variant="filled" sx={{ bgcolor: 'white' }} />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          variant="filled"
          multiline
          rows={4}
          sx={{ bgcolor: 'white' }}
        />
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}