import { Box, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Header = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<>
			<Box
				textAlign={'center'}
				display={'flex'}
				flexDirection={'column'}
				gap={5}
				flexWrap={'wrap'}
				width='100%'
				marginBottom='30px'
				marginTop={isMobile ? '4px' : '160px'}
				borderRadius='15%'
			>
				<Typography variant='h1' color='#e8ffe9'>
					Esteban Durante
				</Typography>
				<Typography variant='h2' color='#76c478'>
					Web developer
				</Typography>
			</Box>
		</>
	);
};
