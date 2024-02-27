import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Skills } from "../pages/skills/skills";
import { Projects } from "../pages/projects/projects";
import { Studies } from "../pages/studies/studies";

export const Browser = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
      
    </>
  );
};
