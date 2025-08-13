import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import PipicucuImage from '../assets/inProgress.png';

export const Pipicucu = () => {
	const { t } = useTranslation();

	return (
		<GridItem
			gridName='Pipi cucu'
			title={t('projects.pipicucu.title')}
			description={t('projects.pipi-cucu.description')}
			link=''
			img={PipicucuImage}
			isProject={true}
			toolsUsed='TypeScript, TypeORM, PostgreSQL, Express, Docker'
		/>
	);
};
