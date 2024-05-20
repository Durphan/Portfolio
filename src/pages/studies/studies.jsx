import { Navbar } from '../../components/navbar';
import { ThemeConfig } from '../../config/theme.config';
import { GridBox } from '../../components/gridBox';
import { AllStudies } from './components/allStudies';
import { useTranslation } from 'react-i18next';
import { Transition } from '../../routes/transition';

export const StudiesPage = () => {
	const { t } = useTranslation();
	return (
		<ThemeConfig>
			<Navbar />
			<Transition>
				<GridBox titleBox={t(`education.title`)}>
					<AllStudies />
				</GridBox>
			</Transition>
		</ThemeConfig>
	);
};
