import { Box, Grid, Typography } from '@mui/material';

export const Skill = ({ svg, skillName }) => {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3} mx={2} marginBottom={'35px'}>
			<Box p={0.5}>
				{svg}
				<br />
				<Typography variant='p' color='white' fontSize={25}>
					{skillName}
				</Typography>
			</Box>
		</Grid>
	);
};
