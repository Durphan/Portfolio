import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const Transition = ({ children }) => {
	return (
		
			<motion.div
				initial={{ opacity: 0, y: '-50%' }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: '100%' }}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		
	)};

Transition.propTypes = {
	children: PropTypes.node.isRequired,
};
