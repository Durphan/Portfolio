import { ThemeConfig } from '../../config/theme.config';
import { Navbar } from '../../components/navbar';
import { SoftSkills } from './components/softSkills';
import { TechSkills } from './components/techSkills';

export const Skills = () => {
	return (
		<ThemeConfig>
			<header>
				<nav>
					<Navbar />
				</nav>
			</header>
			<main>
				<SoftSkills />
				<TechSkills />
			</main>
		</ThemeConfig>
	);
};
