import { Box, Checkbox, Typography } from "@mui/material";

const Table = () => {
  const rows = Array(9).fill(null); 

  return (
    <>
      {rows.map((_, i) => (
        <Box
          key={i}
          sx={{
            bgcolor: i % 2 === 0 ? "#0E3F3333" : "transparent",
            width: { xs: "90%", sm: "450px", md: "500px" },
            height: "45px",
            ml: { xs: 2, sm: 6, md: 20 },
            mt: i === 0 ? 5 : 2,
            mb: 1,
            pt: 0.5,
            position: "relative",
          }}
        >
          <Typography
            noWrap
            component="a"
            sx={{
              
              fontFamily: "Manrope",
              color: "#0E204E",
              textDecoration: "none",
              fontSize: "19px",
              justifyContent: "center",
              pl: 5,
              display: "inline-block",
              lineHeight: "45px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur
          </Typography>
          <Checkbox
            defaultChecked
            sx={{
              color: "#0E204E",
              position: "absolute",
              top: "5px",
              right: "20px",
            }}
          />
        </Box>
      ))}
    </>
  );
};

export default Table;
