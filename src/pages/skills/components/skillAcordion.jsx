import { ExpandCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export const SkillAcordion = ({ nameAccordion, children }) => {
  return (
    <Box marginTop="2em">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandCircleDown color="secondary" />}>
          <Typography variant="h4" color="#D1EDD2">
            {nameAccordion}
          </Typography>

          <Divider />
        </AccordionSummary>
        <AccordionDetails sx={{ background: "#000000" }}>
          <Grid
            container
            my={1}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={`center`}
            gap={3}
          >
            {children}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
