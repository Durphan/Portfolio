import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const SkillBox = ({ titleBox, children }) => {
	return (
		<Box marginTop='2em'>
			<Typography
				variant='h4'
				color='#D1EDD2'
				textAlign={`center`}
				marginBottom={'2em'}
			>
				{titleBox}
			</Typography>
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

SkillBox.propTypes = {
  titleBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};