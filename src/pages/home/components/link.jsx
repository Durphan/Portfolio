import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export const LinkHome = ({ labelLink, linkURL }) => {
	return (
		<>
			<Link to={linkURL} style={{ textDecoration: `none` }}>
				<Typography variant='p' color='#6885EF'>
					{labelLink}
				</Typography>
			</Link>
		</>
	);
};
