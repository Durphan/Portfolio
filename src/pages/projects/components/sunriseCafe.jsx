import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';

export const SunriseCafe = () => {
	const { t } = useTranslation();
	return (
		<>
			<GridItem
				gridName={`Sunrise Cafe`}
				toolsUsed={`JavaScript, React, Styled-Components, React Router, Atomic Design`}
				img={`https://frontend.cafe/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F0mjeop5f%2Fproduction%2Fa3a44e54c1258ea69414d9a75709a65e81b99d03-1600x808.jpg%3Fw%3D400%26h%3D160&w=384&q=75`}
				description={t(`projects.sunrise-cafe.description`)}
				link={`https://sunrise-lilac.vercel.app`}
				isProject={true}
			/>
		</>
	);
};
