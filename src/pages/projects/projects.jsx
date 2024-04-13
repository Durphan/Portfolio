import { Navbar } from '../../components/navbar';
import { ThemeConfig } from '../../config/theme.config';
import { AllProjects } from './components/allProjects';
import { GridBox } from '../../components/gridBox';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
	const { t } = useTranslation();
	return (
		<>
			<ThemeConfig>
				<Navbar />
				<GridBox titleBox={t(`projects.title`)}>
					<AllProjects />
				</GridBox>
			</ThemeConfig>
		</>
	);
};
