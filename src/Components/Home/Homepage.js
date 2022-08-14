import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Authors from '../blogs/Authors'
import Blog from '../blogs/Blog'

const Homepage = () => {
  return (
    <>
    <Container maxWidth="lg"  >
        <Grid container mt={3} padding={2} spacing={2} >
            <Grid item md={3} xs={12} >
                <Typography component="h2" variant='h5'>
                    نویسندگان
                </Typography>
                <Authors />
            </Grid>
            <Grid item md={9} xs={12} >
                <Typography component="h2" variant='h5' >
                    مقالات
                </Typography>
                <Blog/>
            </Grid>

        </Grid>

    </Container>
    </>
  )
}

export default Homepage