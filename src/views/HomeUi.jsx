import React from 'react'
import { Box, Typography, Avatar,Button } from '@mui/material'
import logo from './../assets/logo.png'
import {Link} from 'react-router-dom'

export default function HomeUi() {
    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <Box sx={{ width: '80%', boxShadow: '3', mx: 'auto', mt: 'auto' }}>
                    <Avatar src={logo} sx={{mx: 'auto',mt:'10px',width:'150px',height:'150px'}} />
                    <Typography variant='h5' sx={{fontWeight:'bold', color:'blue',textAlign:'center',mt:'20px'}}>
                        ยินดีต้อนรับสู่
                    </Typography>
                    <Typography sx={{fontSize:'25px',fontWeight:'bold',textAlign:'center', color:'gold',mb:'20px'}}>
                    Tanatorn Site by DTI sau
                    </Typography>
                    <Button component={Link} to='/login' variant='contained'sx={{mb:'30px',display:'block',mx:'auto',width:'200px',backgroundColor:'blue',textAlign:'center'}}>
                        ไปหน้า Login
                    </Button>
                </Box>
            </Box>

        </>
    )
}

