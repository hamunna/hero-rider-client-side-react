import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Container, Typography, Checkbox, TextField } from '@mui/material';
import RiderData from '../RiderData/RiderData';


const Riders = () => {
	const [dbUsers, setDbUsers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/users')
			.then(res => res.json())
			.then(data => setDbUsers(data));
	}, []);


	const handleSearchOnChange = e => {
		const value = e.target.value;
		const url = `http://localhost:5000/users?search=${value}`
		fetch(url)
			.then(res => res.json())
			.then(data => setDbUsers(data));
	}

	return (
		<Container sx={{ mt: 6 }}>

			<Typography variant="h2" sx={{ fontWeight: 700, textAlign: 'center' }}>Hero Users</Typography>

			<TextField
				id="searchField"
				label="Search User by Name/Email/Phone"
				type="search"
				onChange={handleSearchOnChange}
				fullWidth
				sx={{my: 3}}
			/>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">

					<TableHead>
						<TableRow>
							<TableCell align="left"><Checkbox /> Select All</TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">Age</TableCell>
							<TableCell align="left">Actions</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{
							dbUsers.map(dbUser => <TableRow
								key={dbUser?._id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align="left"><Checkbox /></TableCell>
								<TableCell align="left">{dbUser.name}</TableCell>
								<TableCell align="left">{dbUser.email}</TableCell>
								<TableCell align="left">{dbUser.age}</TableCell>
								<TableCell align="left">Block</TableCell>
							</TableRow>)
						}
					</TableBody>

				</Table>
			</TableContainer>
		</Container>
	);
};

export default Riders;