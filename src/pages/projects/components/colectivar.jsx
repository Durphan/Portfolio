import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import ColectivarImage from '../assets/colectivar.jpg';

export const Colectivar = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={'ColectivAR'}
			isProject={true}
			img={ColectivarImage}
			toolsUsed={'Astro, NodeJS, Axios, Leaflet, JavaScript, CSS, Express'}
			description={t('projects.colectivar.description')}
			link='https://github.com/Durphan/ColectivAR'
		/>
	);
};
