import React from 'react';
import homeBg from '../../Assets/images/home-bg.gif';

const bgStyle = {
	backgroundImage: `url(${homeBg})`,
	// backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	width: '100%',
	height: '657px',
	margin: 0,

}

const Home = () => {
	return (
		<div style={{backgroundColor: '#CEE3E2'}}>
			<div style={bgStyle}>


			</div>
		</div>
	);
};

export default Home;