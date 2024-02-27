import { Navbar } from "../../components/navbar";
import { ThemeConfig } from "../../config/theme.config";
import { AllProjects } from "./components/allProjects";
import { GridBox } from "../../components/gridBox";

export const Projects = () => {
  return (
    <>
      <ThemeConfig>
        <Navbar />
        <GridBox titleBox={"Projects"}>
          <AllProjects />
        </GridBox>
      </ThemeConfig>
    </>
  );
};
