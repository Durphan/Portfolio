import { Box } from '@mui/material';
import { Github, Linkedin, Resume } from '../assets/icons';
import { FooterLink } from './footerLink';

export const Footer = () => {
	return (
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
			<FooterLink
				url={
					'https://drive.google.com/file/d/1ePrF4oaKTCh_n1riQVtPh_ysLIm3DQGz/view?usp=sharing'
				}
			>
				<Resume />
			</FooterLink>
		</Box>
	);
};
