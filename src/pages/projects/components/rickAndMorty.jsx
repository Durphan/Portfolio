import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import rickAndMortyImage from '../assets/rickandmorty.png';

export const RickAndMorty = () => {
	const { t } = useTranslation();
	return (
<<<<<<< HEAD
			<GridItem
				gridName={'Rick and Morty API'}
				isProject={true}
				img={rickAndMortyImage}
				toolsUsed={
					'TypeScript, React, React Hook Form, Yup, Axios, Material UI'
				}
				link={'https://github.com/Durphan/Rick-and-morty-Characters'}
				description={t('projects.rickAndMorty.description')}
			/>
=======
		<GridItem
			gridName={'Rick and Morty API'}
			isProject={true}
			img={rickAndMortyImage}
			toolsUsed={'TypeScript, React, React Hook Form, Yup, Axios, Material UI'}
			link={'https://github.com/Durphan/Rick-and-morty-Characters'}
			description={t('projects.rickAndMorty.description')}
		/>
>>>>>>> f60065a (feat(projects) added new projects to the portfolio)
	);
};
