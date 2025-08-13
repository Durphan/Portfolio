import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import FoodieScanImage from '../assets/foodieScan.jpg';

export const FoodieScan = () => {
	const { t } = useTranslation();

	return (
		<GridItem
			gridName='Foodie Scan'
			title={t('projects.foodieScan.title')}
			description={t('projects.foodieScan.description')}
			link='https://frontend-dev-ugay.onrender.com/#inicio'
			img={FoodieScanImage}
			isProject={true}
			toolsUsed='Java, Spring Boot, Spring Security, React, Spring Web, Mockito, Swagger, Tailwind, Docker'
		/>
	);
};
