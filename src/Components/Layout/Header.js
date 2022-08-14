import React from 'react'
import {AppBar , Container, Toolbar,Typography } from '@mui/material'
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:"#6d02f7"}} >
     <Container maxWidth="lg">
        <Toolbar>
            <Typography variant='h5' component="h1" fontWeight="700" flex={1} >
                وبلاگ فیزیک
            </Typography>
            <Link to="/" ><BiotechSharpIcon sx={{fontSize:30,cursor:"pointer" , color:"#fff" }} /></Link>
        </Toolbar>
     </Container>
    </AppBar>
  )
}

export default Header