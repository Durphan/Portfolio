import { Box } from '@mui/material';
import { Github, Linkedin, Resume } from '../assets/icons';
import { useTranslation } from 'react-i18next';
import { FooterLink } from './footerLink';

export const Footer = () => {
	const { t } = useTranslation();
	return (
<<<<<<< HEAD
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'Center'}
				flexDirection={'row'}
				marginTop={'20px'}
				gap={5}
			>
				<FooterLink url='https://github.com/Durphan'>
					<Github />
				</FooterLink>
				<FooterLink url='https://www.linkedin.com/in/frontend-react/'>
					<Linkedin />
				</FooterLink>
				<FooterLink url={t('informationBox.curriculum')}>
					<Resume />
				</FooterLink>
			</Box>
		
=======
		<Box
			display={'flex'}
			alignItems={'center'}
			justifyContent={'Center'}
			flexDirection={'row'}
			marginTop={'20px'}
			gap={5}
		>
			<FooterLink url='https://github.com/Durphan'>
				<Github />
			</FooterLink>
			<FooterLink url='https://www.linkedin.com/in/esteban-durante/'>
				<Linkedin />
			</FooterLink>
			<FooterLink url={t('informationBox.curriculum')}>
				<Resume />
			</FooterLink>
		</Box>
>>>>>>> f60065a (feat(projects) added new projects to the portfolio)
	);
};
