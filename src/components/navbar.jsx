import { AppBar, Toolbar, Divider } from '@mui/material';
import { Home, Projects, Skills, Studies } from '../assets/iconsNavbar';
import { NavbarLink } from './navbarLink';

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
				<NavbarLink linkURL={'/'} labelLink={<Home />} />
				<NavbarLink linkURL={'/projects'} labelLink={<Projects />} />
				<NavbarLink linkURL={'/skills'} labelLink={<Skills />} />
				<NavbarLink linkURL={'/studies'} labelLink={<Studies />} />
			</Toolbar>
			<Divider />
		</AppBar>
	);
};
