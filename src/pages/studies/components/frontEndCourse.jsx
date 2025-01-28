import { useTranslation } from "react-i18next"
import { GridItem } from "../../../components/gridItem"
import argentinaPrograma from "../assets/argentina-programa.png"

export const FrontEndCourse = () => {
    const { t } = useTranslation()
    return(

        <GridItem
        gridName={'Argentina Programa'}
        isProject={false}
        description={t(`education.frontEndCourse.description`)}
        toolsLearned={'React'}
        img={argentinaPrograma}
        />
    )
}