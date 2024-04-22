import { AppBar, Toolbar, Typography, Divider } from '@mui/material';
import { Home, Projects, Skills, Studies } from '../assets/iconsNavbar';

export const Navbar = () => {
	return (
		<AppBar
			color='primary'
			sx={{
				top: 'auto',
				bottom: { xs: 0, sm: 'auto' },
				position: { xs: 'fixed', sm: 'sticky' },
			}}
		>
			<Toolbar
				sx={{ justifyContent: { sm: 'space-evenly', xs: 'space-evenly' } }}
			>
				<Typography variant='h6'>
					<a href='/' style={{ textDecoration: 'none', color: 'white' }}>
						<Home />
					</a>
				</Typography>
				<Typography variant='h6'>
					<a
						href='/projects'
						style={{ textDecoration: 'none', color: 'white' }}
					>
						<Projects />
					</a>
				</Typography>
				<Typography variant='h6'>
					<a href='/studies' style={{ textDecoration: 'none', color: 'white' }}>
						<Studies />
					</a>
				</Typography>
				<Typography variant='h6'>
					<a href='/skills' style={{ textDecoration: 'none', color: 'white' }}>
						<Skills />
					</a>
				</Typography>
			</Toolbar>
			<Divider />
		</AppBar>
	);
};
