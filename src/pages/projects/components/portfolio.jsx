import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import portfolioImage from '../assets/portfolio.png';

export const Portfolio = () => {
	const { t } = useTranslation();
	return (
<<<<<<< HEAD
			<GridItem
				gridName={'Portfolio'}
				isProject={true}
				link={'https://github.com/Durphan/Portfolio'}
				toolsUsed={'I18Next, React, Motion, Material UI'}
				description={t('projects.portfolio.description')}
				img={portfolioImage}
			/>
=======
		<GridItem
			gridName={'Portfolio'}
			isProject={true}
			link={'https://github.com/Durphan/Portfolio'}
			toolsUsed={'I18Next, React, Motion, Material UI'}
			description={t('projects.portfolio.description')}
			img={portfolioImage}
		/>
>>>>>>> f60065a (feat(projects) added new projects to the portfolio)
	);
};
