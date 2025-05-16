import { Box, TextField, Button, Typography, Grid } from '@mui/material';

export default function ContactSection() {
  return (
    <Box>
      <Typography
          variant="h2"
          noWrap
          component="a"
          
          fontWeight={700}
          sx={{
         
            display: { xs: "none", md: "flex", lg: "flex" },
            fontFamily: "Playfair Display",
            color: "#0E204E",
            textDecoration: "none",
            textWrap: "wrap",
            justifyContent:"center"
            
          }}
        >
          Galleries
        </Typography>
        <Typography
        noWrap
        component="a"
        sx={{
          ml: 6,
          mt: 4,
          display: { xs: "none", md: "flex", lg: "flex" },
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "stable",
          justifyContent: "center"
        }}
      >
        Are you curious about Pineapple Island? Send a message
      </Typography>
        <Grid size={8} sx={{display: { sm: "none", md: "flex", lg: "flex" }, justifyContent:"center",mt:5}} >
           <TextField name="name" id='outline-basic' label='name' sx={{display:"flex",width:"900px",[`& fieldset`]: {borderRadius: 0}}}></TextField>
        </Grid>
        <Grid size={8} sx={{display: { sm: "none", md: "flex", lg: "flex" }, justifyContent:"center",mt:5}}>
          <TextField name="Phone No" id='outline-basic' label='Phone No' sx={{display:"flex",width:"900px",[`& fieldset`]: {borderRadius: 0}}} ></TextField>
        </Grid>
        <Grid size={8} sx={{display: { sm: "none", md: "flex", lg: "flex" }, justifyContent:"center",mt:5}}>
           <TextField name="Email" id='outline-basic' label='Email' sx={{display:"flex",width:"900px",[`& fieldset`]: {borderRadius: 0}}}></TextField>
        </Grid >
        <Grid size={8} sx={{display: { sm: "none", md: "flex", lg: "flex" }, justifyContent:"center",mt:5}}>
          <TextField name="Message" id='outline-basic' inputProps={{style: {height: "300px"}
                }}  label='Message' sx={{display:"flex",width:"900px",[`& fieldset`]: {borderRadius: 0}}}></TextField>
        </Grid >
        <Grid size={8} sx={{display: { sm: "none", md: "flex", lg: "flex" }, justifyContent:"center",mt:5,mb:20}}>
          <Button variant="contained" 
          sx={{fontFamily: "Manrope",
                  textTransform: "none",
                  width: "120px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E"}}>Send</Button>
        </Grid>
    </Box>
      
      
  );
}