import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import argentinaprograma from '../assets/argentina-programa.png';

export const ProgrammingCourse = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={'Argentina Programa #SeProgramar'}
			description={t(`education.course.description`)}
			toolsLearned={'Ruby, Angular, Typescript, NodeJS, SCRUM'}
			img={argentinaprograma}
			link={`https://mumuki.io/argentina-programa/certificates/verify/Rg8pNQYLjd4ZUywK`}
			isProject={false}
		/>
	);
};
