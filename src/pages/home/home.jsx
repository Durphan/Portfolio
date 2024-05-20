import { ThemeConfig } from '../../config/theme.config';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ConsoleEmulator } from './components/consoleEmulator';
import { Transition } from '../../routes/transition';

export const HomePage = () => {
	return (
		<Transition>
			<ThemeConfig>
				<header>
					<Header />
				</header>
				<main>
					<ConsoleEmulator />
				</main>
				<footer>
					<Footer />
				</footer>
			</ThemeConfig>
		</Transition>
	);
};
