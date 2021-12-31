import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import homeBg from '../../Assets/images/home-bg.gif';

const bgStyle = {
	backgroundImage: `url(${homeBg})`,
	// backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	width: '100vw',
	height: '567px',
	margin: 0,
	position: 'relative'
}

const registerBtnStyle = {
	backgroundColor: '#D61029',
	textDecoration: 'none',
	"&:hover": {
		backgroundColor: '#0195AE'
	}
};

const loginBtnStyle = {
	backgroundColor: '#025159',
	textDecoration: 'none',
	"&:hover": {
		backgroundColor: '#0195AE',
	}
};

const Home = () => {
	return (
		<div className="commonBg">

			<Typography variant="h4" sx={{fontWeight: 800, p: 3}}> <img src="https://freepngimg.com/thumb/rider/35648-5-rider-file-thumb.png" alt="" style={{width: '4%'}} />Hero Rider</Typography>
			<div style={bgStyle}>

				<Box sx={{ display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center', height: '100px' }}>
					<Button as={Link} to="/riderRegister" sx={registerBtnStyle} variant="contained">Join as a Rider</Button>
					<Button as={Link} to="/learnerRegister" sx={registerBtnStyle} variant="contained">Join as a Learner</Button>
					<Button as={Link} to="/login" sx={loginBtnStyle} variant="contained">Login</Button>
				</Box>

			</div>
		</div>
	);
};

export default Home;