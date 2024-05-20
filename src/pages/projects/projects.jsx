import { Navbar } from '../../components/navbar';
import { ThemeConfig } from '../../config/theme.config';
import { AllProjects } from './components/allProjects';
import { GridBox } from '../../components/gridBox';
import { useTranslation } from 'react-i18next';
import { Transition } from '../../routes/transition';

export const ProjectsPage = () => {
	const { t } = useTranslation();
	return (
		<ThemeConfig>
			<Navbar />
			<Transition>
				<GridBox titleBox={t(`projects.title`)}>
					<AllProjects />
				</GridBox>
			</Transition>
		</ThemeConfig>
	);
};
