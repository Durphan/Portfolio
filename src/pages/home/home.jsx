import { ThemeConfig } from '../../config/theme.config';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ConsoleEmulator } from './components/consoleEmulator';

export const Home = () => {
	return (
		<>
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
		</>
	);
};
