import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const bookBtnStyle = {
	backgroundColor: '#D61029',
	textDecoration: 'none',
	width: '100%',
	"&:hover": {
		backgroundColor: '#0195AE'
	}
};

const Package = ({ learningPackage }) => {
	const { id, name, image, price } = learningPackage;

	return (
		<Card sx={{ width: 340 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					image={image}
					alt=""
				/>
				<CardContent>
					<Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center', fontWeight: 800, color: '#D61029'}}>
						{name}: ${price}
					</Typography>

				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button variant="contained" size="large" color="primary" sx={bookBtnStyle}>
					Book the Course
				</Button>
			</CardActions>
		</Card>
	);
};

export default Package;