import { motion } from 'framer-motion';

export const FooterLink = ({ url, children }) => {
	return (
		<motion.a
			whileTap={{ scale: 0.85 }}
			href={url}
			target='_blank'
			style={{ textDecoration: 'none', color: 'white' }}
			rel='noreferrer'
		>
			{children}
		</motion.a>
	);
};
