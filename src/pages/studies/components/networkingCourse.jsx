import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import CDAC from '../assets/C-DAC.png';

export const ProgrammingCourse = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={'CDAC'}
			description={t(`education.course.description`)}
			toolsLearned={t('education.course.toolsLearned')}
			img={CDAC}
			link={`https://drive.google.com/file/d/17YpU2_EZUiyll687iciWwy2BiNXc12L_/view`}
			isProject={false}
		/>
	);
};
