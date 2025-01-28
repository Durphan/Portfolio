import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { InformationBox } from './InformationBox';

export const ConsoleEmulator = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	const [output, setOutput] = useState([]);

	useEffect(() => {
		showInformation();
	}, []);

	const showInformation = () => {
		const infoBox = <InformationBox />;

		setOutput([infoBox]);
	};

	return (
		<Box
			sx={{
				width: isMobile ? '100%' : '70%',
				margin: '0 auto',
				overflowY: 'auto',
			}}
		>
			<Box
				sx={{
					backgroundColor: 'black',
					color: 'white',
					padding: '10px',
					fontFamily: 'Kode mono',
					height: '100%',
					width: '100%',
					maxWidth: '800px',
					margin: '0 auto',
					marginBottom: '30px',
				}}
			>
				{output.map((content) => (
					<div key={content.key}>{content}</div>
				))}
			</Box>
		</Box>
	);
};
