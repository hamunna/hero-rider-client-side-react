import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

// import regiBg from '../../images/login-bg.png';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

// Initializing Data
const initializeUserData = {
	name: "",
	email: "",
	age: "",
	gender: "",
	address: "",
	phone: "",
	area: "",
	role: "learner",
	vehicleType: "",
	vehicleInformation: { carName: "", carModel: "", namePalate: "" },
	profilePicture: "",
	nidPicture: "",
	drivingLicensePicture: "",
	password: "",
	isBlocked: false
}

const LearnerRegister = () => {
	// const { user, registerUser } = useAuth();
	const { user, registerUser } = useFirebase();
	const [gender, setGender] = React.useState('');
	const [vehicleType, setVehicleType] = React.useState('');
	const [registerData, setRegisterData] = useState(initializeUserData);

	console.log(registerData);

	const navigate = useNavigate();

	// Handle Inputs with onBlur method
	// Note:: Some input used onChange to avoid Browser AutoFill
	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newRegisterData = { ...registerData };

		if (field === "carName" || field === "carModel" || field === "namePalate") {
			newRegisterData.vehicleInformation[field] = value;
		}

		console.log(newRegisterData);
		setRegisterData(newRegisterData);
	}

	// Handling Register New Rider
	const handleRegisterRiderSubmit = e => {
		e.preventDefault();

		registerUser(registerData, navigate)

		alert("Registered Successfully!");

		console.log("After Register: " + registerData);
		console.log("After Register: " + typeof registerData);

		e.target.reset();
	}

	// Handling Gender
	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	// Handling Vehicle Type
	const handleVehicleTypeChange = (event) => {
		setVehicleType(event.target.value);
	};

	const registerBtnStyle = {
		backgroundColor: '#D61029',
		textDecoration: 'none',
		width: '100%',
		"&:hover": {
			backgroundColor: '#0195AE'
		}
	};

	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={-1} sx={{ height: '650px' }}>

			{/* Left Side */}
			<Box gridColumn="span 6" sx={{ display: 'flex', alignItems: 'center' }}>
				<img style={{ width: '80%' }} src="https://www.pinclipart.com/picdir/big/47-473433_vector-black-and-white-stock-driving-drive-away.png" alt="" />
			</Box>

			{/* Right & Main Side */}
			<Box gridColumn="span 6" sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

				<Box sx={{ width: '80%' }}>
					<Typography variant="h3" sx={{ fontWeight: 900, color: "#D61029", mb: 1 }}>Join as a Learner</Typography>

					<form onSubmit={handleRegisterRiderSubmit}>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>

							{/* Full Name */}
							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="Full Name"
								name="name"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							{/* Email */}
							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="email"
								label="Email"
								name="email"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>
						</Box>

						{/* Age & Gender */}
						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }} >

							{/* Age */}
							<TextField
								sx={{ width: '49%' }}
								type="text"
								label="Age"
								placeholder="Ex. 20"
								name="age"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							{/* Gender */}
							<FormControl
								variant="standard"
								sx={{ width: '49%' }}
							>
								<InputLabel id="gender">Gender</InputLabel>
								<Select
									labelId="gender"
									name="gender"
									value={gender}
									onChange={handleGenderChange}
									label="Gender"
									sx={{ textAlign: 'left' }}
									onBlur={handleOnBlur}
									required
								>

									<MenuItem value="Male">Male</MenuItem>
									<MenuItem value="Female">Female</MenuItem>
									<MenuItem value="Other">Other</MenuItem>
								</Select>
							</FormControl>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>

							{/* Address */}
							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="text"
								label="Address"
								name="address"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							{/* Phone */}
							<TextField
								sx={{ width: '49%' }}
								fullWidth
								type="text"
								label="Phone"
								name="phone"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>
						</Box>

						<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>

							{/* Vehicle Type Dropdown */}
							<FormControl
								variant="standard"
								sx={{ width: '32%' }}
							>
								<InputLabel id="vehicleType">Vehicle Type</InputLabel>
								<Select
									labelId="vehicleType"
									name="vehicleType"
									value={vehicleType}
									onChange={handleVehicleTypeChange}
									label="Gender"
									sx={{ textAlign: 'left' }}
									onBlur={handleOnBlur}
									required
								>

									<MenuItem value="Car">Car</MenuItem>
									<MenuItem value="Bike">Bike</MenuItem>
								</Select>
							</FormControl>

							{/* Profile Picture */}
							<TextField
								sx={{ width: '32%' }}
								type="url"
								label="Profile Picture"
								name="profilePicture"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

							{/* NID Picture */}
							<TextField
								sx={{ width: '32%' }}
								type="url"
								label="NID Picture"
								name="nidPicture"
								variant="standard"
								onChange={handleOnBlur}
								required
							/>

						</Box>


						{/* Password Fields */}
						<Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>

							<TextField
								sx={{ width: '49%' }}
								type="password"
								label="Password"
								name="password"
								variant="standard"
								onBlur={handleOnBlur}
								required
							/>

							<TextField
								sx={{ width: '49%' }}
								type="password"
								label="Confirm Password"
								name="confirmPassword"
								variant="standard"
							/>

						</Box>

						<Button type="submit" className="loginBtn" variant="contained" sx={registerBtnStyle}>
							Join as a Learner
						</Button>

					</form>

					{/* <Typography variant="body2">----------------------- Want to Learn Riding ? -----------------------</Typography>

					<NavLink style={{ textDecoration: 'none' }} to="/learnerRegister">
						<Button className="registerSwitchBtn">
							Join as a Learner
						</Button>
					</NavLink> */}
				</Box>


			</Box>



		</Box>
	);
};

export default LearnerRegister;