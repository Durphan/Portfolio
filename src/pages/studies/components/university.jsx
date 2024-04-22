import { useTranslation } from 'react-i18next';
import { GridItem } from '../../../components/gridItem';
import unahur from '../assets/unahurLogo.jpg';

export const University = () => {
	const { t } = useTranslation();
	return (
		<>
			<GridItem
				gridName={'UNAHUR'}
				img={unahur}
				description={t(`education.university.description`)}
				toolsLearned={'JavaScript, CSS, HTML, Git, MYSQL'}
				link={`https://drive.google.com/file/d/1x0yWUlf1rMaua1teYsTpKtQRAxASXE3s/view`}
				isProject={false}
			/>
		</>
	);
};
