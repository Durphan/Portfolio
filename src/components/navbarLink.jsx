import { NavLink } from 'react-router-dom';

export const NavbarLink = ({ linkURL, labelLink }) => {
	return <NavLink to={linkURL}>{labelLink}</NavLink>;
};
