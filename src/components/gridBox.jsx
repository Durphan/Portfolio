import { Box, Typography, Grid } from '@mui/material';

export const GridBox = ({ titleBox, children }) => {
	return (
		<Box marginTop='2em' marginBottom={`50px`}>
			<Typography variant='h4' color='#D1EDD2' textAlign={`center`}>
				{titleBox}
			</Typography>
			<Grid container my={1} justifyContent={'center'} alignItems={'center'}>
				{children}
			</Grid>
		</Box>
	);
};
