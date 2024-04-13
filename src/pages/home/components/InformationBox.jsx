import { Box, Typography } from '@mui/material';
import { Link } from './link';
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
						<Link labelLink={t('informationBox.skillsLink')} link={'/skills'} />
					</li>
					<li>
						<Link
							labelLink={t('informationBox.projectsLink')}
							link={'/projects'}
						/>
					</li>
					<li>
						<Link
							labelLink={t('informationBox.educationLink')}
							link={'/studies'}
						/>
					</li>
				</ul>
			</Typography>
		</Box>
	);
};
