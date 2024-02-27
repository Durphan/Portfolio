import { GridItem } from "../../../components/gridItem";
import RickAndMorty from "../assets/rickandmorty.png";
import GlobalGameJam from "../assets/GlobalGameJam.png";

export const AllProjects = () => {
  return (
    <>
      <GridItem
        gridName={"Rick and Morty Characters"}
        toolsUsed={
          "CSS, TypeScript, React, React Router, Yup, Material UI, Axios"
        }
        img={RickAndMorty}
        description={
          "A web page where you can view basic information of every character of Rick and morty series"
        }
        link={"https://rick-and-morty-characters-bay.vercel.app"}
        isProject={true}
      />
      <GridItem
        gridName={"Global Game Jam 2024"}
        toolsUsed={"C#, Unity Game Engine, SCRUM, MVP, Project Management"}
        img={GlobalGameJam}
        description={
          "Intensive development for a 2D video game over the course of 3 days, it was our first time participating in this kind of challenge."
        }
        link={"https://globalgamejam.org/games/2024/slime-survivor-1"}
        isProject={true}
      />
    </>
  );
};
