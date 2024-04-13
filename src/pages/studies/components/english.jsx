import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import liceobritanico from '../assets/liceo-cultural-britanico.jpg';

export const English = () => {
	const { t } = useTranslation();
	return (
		<>
			<GridItem
				gridName={'Liceo Cultural Britanico'}
				description={t(`education.english.description`)}
				toolsLearned={t(`education.english.toolsLearned`)}
				img={liceobritanico}
				link={`https://liceobritanico.com/gestion/Certificados.php?I=164291-2023/03`}
				isProject={false}
			/>
		</>
	);
};
