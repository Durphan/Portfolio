<<<<<<< HEAD
export const trackMyFix = () => {
    
}
=======
import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';

export const trackMyFix = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={'Track My Fix'}
			isProject={true}
			img={''}
			toolsUsed={
				'Spring Boot, Java, JWT, MySQL, MariaDB, React, Axios, Material UI'
			}
			description={t('projects.trackMyFix.description')}
		/>
	);
};
>>>>>>> f60065a (feat(projects) added new projects to the portfolio)
