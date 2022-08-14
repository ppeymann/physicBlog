import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CardEL = ({title , slug , coverPhoto,reference}) => {
  return (
    <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4, }}>
        {
            reference && 
            <CardHeader 
            avatar={<Avatar src={reference.avatar.url}/> }
            title={<Typography component="p" variant='p' color="text.secondary" sx={{marginLeft:2,marginRight:2}} >{reference.name}</Typography>}
            />
        }
        <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
        />
        <CardContent>
            <Typography component="h3" fontSize={16} variant='h6' color="text.primary" >
                {title}
            </Typography>
        </CardContent>
        <Divider variant='middle' sx={{margin:"10px"}} />
        <CardActions>
            <Link to={`/blogs/${slug}`} style={{textDecoration:"none" , width:"100%" }} >
            <Button variant='outlined' size='small' sx={{width:"100%" , borderRadius:3 }} >
                مطالعه مقاله
            </Button>
            </Link>
        </CardActions>
    </Card>
  )
}

export default CardEL