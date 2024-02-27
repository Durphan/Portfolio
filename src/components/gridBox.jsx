import { Box, Divider, Typography, Grid } from "@mui/material";
import { React } from "react";

export const GridBox = ({ titleBox, children }) => {
  return (
    <Box marginTop="2em">
      <Typography variant="h4" color="#D1EDD2">
        {titleBox}
      </Typography>
      <Divider />
      <Grid container my={1} justifyContent={"center"} alignItems={"center"}>
        {children}
      </Grid>
    </Box>
  );
};
