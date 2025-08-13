import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import unahur from '../assets/unahurLogo.jpg';

export const University = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={'UNAHUR'}
			img={unahur}
			description={t(`education.university.description`)}
			toolsLearned={
				'JavaScript, CSS, HTML, Git, MYSQL, Oracle, Python, Data Structures, Design Patterns, Java'
			}
			link={`https://drive.google.com/file/d/1IKeINrAGeKU9afmAYJiUnhaucAAA2Tq4/view?usp=sharing`}
			isProject={false}
		/>
	);
};
