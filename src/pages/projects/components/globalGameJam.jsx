import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import GlobalGameJamImage from '../assets/GlobalGameJam.png';

export const GlobalGameJam = () => {
	const { t } = useTranslation();
	return (
		<>
			<GridItem
				gridName={'Global Game Jam 2024'}
				toolsUsed={'C#, Unity Game Engine, SCRUM, Project Management'}
				img={GlobalGameJamImage}
				description={t(`projects.gameJam.description`)}
				link={'https://globalgamejam.org/games/2024/slime-survivor-1'}
				isProject={true}
			/>
		</>
	);
};
