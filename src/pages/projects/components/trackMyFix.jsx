import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import TrackMyFixImage from '../assets/trackmyfix.webp';

export const TrackMyFix = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={'Track My Fix'}
			isProject={true}
			img={TrackMyFixImage}
			toolsUsed={
				'Spring Boot, Java, JWT, MySQL, MariaDB, React, Axios, Material UI'
			}
			description={t('projects.trackMyFix.description')}
			link='https://github.com/Durphan/TrackMyFix'
		/>
	);
};
