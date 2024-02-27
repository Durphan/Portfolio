import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
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
    <div
      style={{
        width: isMobile ? "100%" : "70%",
        margin: "0 auto",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          fontFamily: "monospace",
          height: "100%",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          marginBottom: "30px",
        }}
      >
        {output.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    </div>
  );
};
