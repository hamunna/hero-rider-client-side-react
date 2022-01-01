import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Header from '../../../Components/Header/Header';
import Riders from '../Riders/Riders';
import RiderData from '../RiderData/RiderData';
import { TextField } from '@mui/material';

const drawerWidth = 240;


const AdminHome = () => {
	return (
		<>
			{/* <Header /> */}

			<Box sx={{ display: 'flex' }}>

				<Drawer
					variant="permanent"
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#CEE3E2', zIndex: 0 },
					}}
				>
					<Typography variant="h5" sx={{ fontWeight: 800, p: 3 }}> <img src="https://freepngimg.com/thumb/rider/35648-5-rider-file-thumb.png" alt="" style={{ width: '20%' }} />Hero Users</Typography>
					<Toolbar />

					<Box sx={{ overflow: 'auto' }}>
						<List>
							<ListItem sx={{ fontWeight: 800 }} button>Riders</ListItem>
							<ListItem sx={{ fontWeight: 800 }} button>Learners</ListItem>
						</List>

					</Box>
				</Drawer>

				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>

					<Riders />
					{/* <RiderData /> */}
				</Box>
			</Box>
		</>
	);
};

export default AdminHome;