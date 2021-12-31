import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import { Container, Box } from '@mui/material';

const Packages = () => {
	const [learningPackages, setLearningPackages] = useState([]);

	useEffect(() => {
		fetch('./learnPackages.json')
			.then(res => res.json())
			.then(data => setLearningPackages(data));
	}, []);

	return (
		<Box sx={{ pt: 6, height: '520px' }} className="commonBg">
			<Container>
				<Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
					{
						learningPackages.map(learningPackage => <Package
							key={learningPackage.id}
							learningPackage={learningPackage}
						/>)
					}
				</Box>
			</Container>
		</Box>
	);
};

export default Packages;