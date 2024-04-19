import { Box } from '@mui/material';
import { Github, Linkedin, Resume } from '../assets/icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'Center'}
				flexDirection={'row'}
				marginTop={'20px'}
				gap={5}
			>
				<a
					href='https://github.com/Durphan'
					target='_blank'
					style={{ textDecoration: 'none', color: 'white' }}
					rel='noreferrer'
				>
					<Github />
				</a>
				<a
					href='https://www.linkedin.com/in/frontend-react/'
					target='_blank'
					style={{ textDecoration: 'none', color: 'white' }}
					rel='noreferrer'
				>
					<Linkedin />
				</a>
				<a
					href={t('informationBox.curriculum')}
					target='_blank'
					style={{ textDecoration: 'none', color: 'white' }}
					rel='noreferrer'
				>
					<Resume />
				</a>
			</Box>
		</>
	);
};
