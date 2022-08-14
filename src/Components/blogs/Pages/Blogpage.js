import { useQuery } from '@apollo/client'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { POST_INFO } from '../../../Graphql/Query'
import Loader from '../../Loader/Loader'
import TurnLeftRoundedIcon from '@mui/icons-material/TurnLeftRounded';
import CommentForm from '../../comment/CommentForm'
import Coments from '../../comment/Coments'

const Blogpage = () => {
    

    const {slug} = useParams()
    const navigate = useNavigate()

    const {loading , data , error} = useQuery(POST_INFO,{
        variables:{slug}
    })
    console.log(data)

    if(loading) return <Loader />
    if(error) return <h4>Error ...</h4>

  return (
    <Container maxWidth="lg" >
        <Grid container>
            <Grid item xs={12} mt={2} display="flex" justifyContent="space-between" >
                <Typography component="h2" variant='h4' color="#6d02f7" fontWeight={700}>
                    {data.post.title}
                </Typography>
                <TurnLeftRoundedIcon onClick={()=>navigate(-1)} sx={{cursor:"pointer" , fontSize:"25px" , color:"#6d02f9" }} />
            </Grid>
            <Grid item xs={12} mt={6} >
                <img src={data.post.coverPhoto.url} width="100%" style={{borderRadius:"15px"}} />
            </Grid>
            <Grid item xs={12} mt={7} display="flex" alignItems="center" >
                <Avatar
                src={data.post.reference.avatar.url}
                sx={{width:"80px" , height:"80px" ,marginLeft:2}}
                />
                <Box component="div" >
                <Typography component="p" variant='h5' fontWeight={700} >{data.post.reference.name}</Typography>
                <Typography component="p" variant='p' color="text.secondary" >{data.post.reference.field}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} >
                <div dangerouslySetInnerHTML={{__html:data.post.content.html}}></div>
            </Grid>
            <Grid item xs={12}>
                <CommentForm slug={slug} />
            </Grid>
            <Grid item xs={12}>
                <Coments slug={slug} />
            </Grid>
        </Grid>
    </Container>
  )
}

export default Blogpage