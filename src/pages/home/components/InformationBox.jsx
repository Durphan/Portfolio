import { Box, Typography } from "@mui/material";
import { Link } from "./link";

export const InformationBox = () => {
  return (
    <Box
      bgcolor="#000000"
      border="5px solid #302A2A"
      width="100%"
      display={"inline-block"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      padding={2}
      textAlign={"justify"}
    >
      <ul>
        <li className="description">Welcome to my portfolio</li>
      </ul>
      <Typography variant="p" color="white" className="description">
        I'm a web developer who enjoys constant learning and create innovative
        applications, providing my knowledge in Front-end and Back-end
        development.
        <br />
        <br />
        If you are interested, you can find more information below.
        <ul>
          <li>
            <Link labelLink={"Technical and Soft Skills"} link={"/skills"} />
          </li>
          <li>
            <Link labelLink={"Completed Projects"} link={"/projects"} />
          </li>
          <li>
            <Link labelLink={"Education"} link={"/studies"} />
          </li>
        </ul>
      </Typography>
    </Box>
  );
};
