import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import inProgress from '../assets/inprogress.jpg';

export const LoginAuthenticator = () => {
	const { t } = useTranslation();
	return (
		<GridItem
			gridName={t('projects.loginRegisterSystem.name')}
			isProject={true}
			link={'https://github.com/Durphan/login-register-system-spring'}
			img={inProgress}
			toolsUsed={'Spring Boot, Java, MySQL'}
			description={t('projects.loginRegisterSystem.description')}
		/>
	);
};
