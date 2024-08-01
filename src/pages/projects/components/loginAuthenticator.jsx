import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import inProgress from '../assets/inProgress.png';

export const LoginAuthenticator = () => {
	const { t } = useTranslation();
	return (
		<>
			<GridItem
				gridName={''}
				isProject={true}
				link={'/'}
				img={inProgress}
				toolsUsed={
					'React, Material UI, Java, SQL, Spring, TypeScript, React Hook Form, Yup'
				}
				description={t('projects.loginAuthenticator.description')}
			/>
		</>
	);
};
