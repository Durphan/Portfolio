import { ThemeConfig } from '../../config/theme.config';
import { Navbar } from '../../components/navbar';
import { SoftSkills } from './components/softSkills';
import { TechSkills } from './components/techSkills';
import { Transition } from '../../routes/transition';

export const Skills = () => {
	return (
		<ThemeConfig>
			<header>
				<nav>
					<Navbar />
				</nav>
			</header>
			<Transition>
				<main>
					<SoftSkills />
					<TechSkills />
				</main>
			</Transition>
		</ThemeConfig>
	);
};
