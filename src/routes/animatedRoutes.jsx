import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../pages/home/home';
import { Skills } from '../pages/skills/skills';
import { ProjectsPage } from '../pages/projects/projects';
import { StudiesPage } from '../pages/studies/studies';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomePage />} />
				<Route path='skills' element={<Skills />} />
				<Route path='projects' element={<ProjectsPage />} />
				<Route path='studies' element={<StudiesPage />} />
			</Routes>
		</AnimatePresence>
	);
};
