import { Box, Typography } from '@mui/material';
import { LinkDom } from './link';
import { useTranslation } from 'react-i18next';

export const InformationBox = () => {
	const { t } = useTranslation();

	return (
		<Box
			bgcolor='#000000'
			border='5px solid #302A2A'
			width='100%'
			display={'inline-block'}
			justifyContent={'center'}
			alignContent={'center'}
			alignItems={'center'}
			padding={2}
		>
			<ul>
				<li className='description'>{t('informationBox.title')}</li>
			</ul>
			<Typography variant='p' color='white' className='description'>
				{t('informationBox.resume')}
				<br />
				<br />
				{t('informationBox.invitation')}
				<ul>
					<li>
						<LinkDom
							labelLink={t('informationBox.skillsLink')}
							linkURL={'/skills'}
						/>
					</li>
					<li>
						<LinkDom
							labelLink={t('informationBox.projectsLink')}
							linkURL={'/projects'}
						/>
					</li>
					<li>
						<LinkDom
							labelLink={t('informationBox.educationLink')}
							linkURL={'/studies'}
						/>
					</li>
				</ul>
			</Typography>
		</Box>
	);
};
