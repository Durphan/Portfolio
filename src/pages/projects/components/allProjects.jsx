import { GlobalGameJam } from './globalGameJam';
import { RickAndMorty } from './rickAndMorty';
import { Portfolio } from './portfolio';
import { LoginAuthenticator } from './loginAuthenticator';

export const AllProjects = () => {
	return (
		<>
			<GlobalGameJam />
			<RickAndMorty />
			<Portfolio />
			<LoginAuthenticator />
		</>
	);
};
