import { GlobalGameJam } from './globalGameJam';
import { RickAndMorty } from './rickAndMorty';
import { Portfolio } from './portfolio';
import { LoginAuthenticator } from './loginAuthenticator';
import { TrackMyFix } from './trackMyFix';
import { Colectivar } from './colectivar';
import { FoodieScan } from './foodieScan';
import { Pipicucu } from './pipicucu';

export const AllProjects = () => {
	return (
		<>
			<GlobalGameJam />
			<RickAndMorty />
			<Portfolio />
			<LoginAuthenticator />
			<TrackMyFix />
			<Colectivar />
			<FoodieScan />
			<Pipicucu />
		</>
	);
};
