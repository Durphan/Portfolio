import { Box, Grid } from '@mui/material';

export const SkillBox = ({ children }) => {
	return (
		<Box marginTop='2em'>
			<Grid
				container
				my={1}
				justifyContent={'center'}
				alignItems={'center'}
				textAlign={`center`}
				gap={3}
			>
				{children}
			</Grid>
		</Box>
	);
};
