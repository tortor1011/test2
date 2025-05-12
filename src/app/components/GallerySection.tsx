import { Box, Grid, Card, CardMedia,Typography } from '@mui/material';

export default function GallerySection() {
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={img} alt={`Gallery ${index}`} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}