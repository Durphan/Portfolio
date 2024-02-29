import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { InformationBox } from "./InformationBox";

export const ConsoleEmulator = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [output, setOutput] = useState([]);

  useEffect(() => {
    showInformation();
  }, []);

  const showInformation = () => {
    const infoBox = <InformationBox />;

    setOutput([infoBox]);
  };

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "70%",
        margin: "0 auto",
        overflowY: "auto",
        fontFamily: "monospace",
        height: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        maxWidth: "800px",
        marginBottom: "30px",
      }}
    >
        {output.map((content, index) => (
          <div key={index} >{content}</div>
        ))}
      </Box>
  );
};
