import { Navbar } from "../../components/navbar";
import { ThemeConfig } from "../../config/theme.config";
import { GridBox } from "../../components/gridBox";
import { AllStudies } from "./components/allStudies";

export const Studies = () => {
  return (
    <>
      <ThemeConfig>
        <Navbar />
        <GridBox titleBox={"Education"}>
          <AllStudies />
        </GridBox>
      </ThemeConfig>
    </>
  );
};
