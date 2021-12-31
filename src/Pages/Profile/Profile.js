import React from 'react';
import { Box, Container, ListItem, ListItemAvatar, Avatar, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


import Header from '../../Components/Header/Header';


const profileTopBannerStyle = {
	height: '200px',
	backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-driving-school-training-cartoon-childish-yellow-banner-image_174077.jpg")`,
	backgroundSize: 'cover',
	backgroundPosition: 'center'
}

const Profile = () => {
	return (
		<Box className="commonBg" sx={{ height: "667px" }}>
			<Box sx={profileTopBannerStyle}>
				<Header />
			</Box>

			<Container sx={{display: 'flex', justifyContent: 'space-between', gap: 4}}>

				{/* Left Side */}
				<Box sx={{ mt: 4, backgroundColor: '#fff', borderRadius: '10px', width: '40%' }}>
					<ListItem>
						<ListItemAvatar sx={{ mr: 2 }}>
							<Avatar
								alt=""
								src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/74575654_2388961551221324_203082658098446336_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeETFrjVUYYXcb4yDnIuGODCanDT1gl9zuZqcNPWCX3O5lrAe5-j0rCYl0u-diaH0DVCoHwOCPOYg1sfA6xE4cAx&_nc_ohc=Lukl7wDY1rkAX_8b2Df&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT8YljkUm89cfr_KIWgvTf6zX-LC6ksux6nR2i7DwayezA&oe=61F576D1"
								sx={{ width: 160, height: 160, border: '2px solid #fff' }}
							/>
						</ListItemAvatar>

						<Box>
							<Typography sx={{ fontSize: 26, fontWeight: 500, color: '#000', mb: 0 }}>
								Name Here
							</Typography>

							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

								<Typography sx={{ fontSize: 16, fontWeight: 300, color: '#000', mt: 0 }}>
									Bike/Car Rider/Learner
								</Typography>
							</Box>

						</Box>

					</ListItem>


					<Box sx={{ p: 5 }}>



						<Typography sx={{ display: 'flex', alignItems: 'center', gap: 2,  fontSize: 16, fontWeight: 300, color: '#000', mt: 3 }}>
							<EmailIcon sx={{ color: '#D61029' }} />
							email@email.com
						</Typography>

						<Typography sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 16, fontWeight: 300, color: '#000', mt: 3 }}>
							<PhoneIphoneIcon sx={{ color: '#D61029' }} />
							+8801786766896
						</Typography>

						<Typography sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 16, fontWeight: 300, color: '#000', mt: 3 }}>
							<LocationOnIcon sx={{ color: '#D61029' }} />
							 Sylhet, Bangladesh
						</Typography>



					</Box>
				</Box>


				{/* Right Side */}
				<Box sx={{ mt: 4, backgroundColor: '#fff', borderRadius: '10px', width: '60%' }}>
					<ListItem>

						<Box>
							<Typography sx={{ fontSize: 26, fontWeight: 500, color: '#000', mb: 0 }}>
								Name Here
							</Typography>

							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

								<Typography sx={{ fontSize: 16, fontWeight: 300, color: '#000', mt: 0 }}>
									Bike/Car Rider/Learner
								</Typography>
							</Box>

						</Box>

					</ListItem>


					<Box sx={{ p: 5 }}>



						<Typography sx={{ display: 'flex', alignItems: 'center', gap: 2,  fontSize: 16, fontWeight: 300, color: '#000', mt: 3 }}>
							<EmailIcon sx={{ color: '#D61029' }} />
							email@email.com
						</Typography>

						<Typography sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 16, fontWeight: 300, color: '#000', mt: 3 }}>
							<PhoneIphoneIcon sx={{ color: '#D61029' }} />
							+8801786766896
						</Typography>

						<Typography sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 16, fontWeight: 300, color: '#000', mt: 3 }}>
							<LocationOnIcon sx={{ color: '#D61029' }} />
							 Sylhet, Bangladesh
						</Typography>



					</Box>
				</Box>


			</Container>
		</Box>
	);
};

export default Profile;