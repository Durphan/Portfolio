import { Navbar } from '../../components/navbar';
import { ThemeConfig } from '../../config/theme.config';
import { GridBox } from '../../components/gridBox';
import { AllStudies } from './components/allStudies';
import { useTranslation } from 'react-i18next';

export const Studies = () => {
	const { t } = useTranslation();
	return (
		<>
			<ThemeConfig>
				<Navbar />
				<GridBox titleBox={t(`education.title`)}>
					<AllStudies />
				</GridBox>
			</ThemeConfig>
		</>
	);
};
