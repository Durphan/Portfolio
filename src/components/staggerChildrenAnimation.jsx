import { motion } from 'framer-motion';

export const StaggerChildren = ({ children }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				x: children % 2 === 0 ? 50 : -50,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: {
					delay: 1,
				},
			}}
			exit={{ opacity: 0 }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
};
