import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import RickAndMortyImage from '../assets/rickandmorty.png';

export const RickAndMorty = () => {
	const { t } = useTranslation();
	return (
		<>
			<GridItem
				gridName={'Rick and Morty Characters'}
				toolsUsed={
					'CSS, TypeScript, React, React Router, Yup, Material UI, Axios'
				}
				img={RickAndMortyImage}
				description={t(`projects.rickAndMorty.description`)}
				link={'https://rick-and-morty-characters-bay.vercel.app'}
				isProject={true}
			/>
		</>
	);
};
