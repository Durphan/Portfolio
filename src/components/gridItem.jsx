import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { StaggerChildren } from './staggerChildrenAnimation';


export const GridItem = ({
	link,
	gridName,
	toolsUsed,
	img,
	description,
	isProject,
	toolsLearned,
}) => {
	const { t } = useTranslation();

	return (
	
			<Grid item xs={12} sm={6} md={4} lg={3} mx={2}>
				<StaggerChildren>
					<a
						href={link}
						style={{ textDecoration: 'none' }}
						target='_blank'
						rel='noreferrer'
					>
						<Card
							sx={{
								backgroundColor: '#00000',
								my: '2em',
								boxShadow: '10px 5px 5px 5px black',
								xs: { height: '465px' },
							}}
						>
							<CardHeader title={gridName} />
							<CardMedia
								component={'img'}
								height={250}
								width={230}
								image={img}
								sx={{ border: '#00000 solid black', objectFit:'scale-down'}}
							/>
							<CardContent>
								{isProject ? (
									<>
										<Typography variant='p' color='white'>
											{t(`projects.tools`)}: {toolsUsed}
										</Typography>
										<Divider sx={{ marginBottom: '10px', marginTop: '10px' }} />
										<Typography variant='p' color='white'>
											{description}
										</Typography>
									</>
								) : (
									<>
										<Typography variant='p' color='white'>
											{t(`education.tools`)}: {toolsLearned}
										</Typography>
										<Divider sx={{ marginBottom: '10px', marginTop: '10px' }} />
										<Typography variant='p' color='white'>
											{description}
										</Typography>
									</>
								)}
							</CardContent>
						</Card>
					</a>
				</StaggerChildren>
			</Grid>
	)}

	GridItem.propTypes = {
		link: PropTypes.string.isRequired,
		gridName: PropTypes.string.isRequired,
		toolsUsed: PropTypes.string,
		img: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		isProject: PropTypes.bool.isRequired,
		toolsLearned: PropTypes.string,
	};
	