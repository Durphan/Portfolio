import { GridItem } from "../../../components/gridItem";
import unahur from "../assets/unahurLogo.jpg";
import liceobritanico from "../assets/liceo-cultural-britanico.jpg";
import argentinaprograma from "../assets/argentina-programa.png";

export const AllStudies = () => {
  return (
    <>
      <GridItem
        gridName={"UNAHUR"}
        isProject={false}
        img={unahur}
        description={"UnderGraduate Degree in Computer Programming"}
        toolsLearned={"JavaScript, CSS, HTML, Git, React."}
      />
      <GridItem
        gridName={"Liceo Cultural Britanico"}
        isProject={false}
        description={"English"}
        toolsLearned={"Reading and use of English, Speaking."}
        img={liceobritanico}
      />
      <GridItem
        gridName={"Argentina Programa #SeProgramar"}
        isProject={false}
        description={"FullStack Web Development"}
        toolsLearned={"Ruby, Angular, Typescript, NodeJS, MYSQL, SCRUM"}
        img={argentinaprograma}
      />
    </>
  );
};
