import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import React from 'react'
import { BLOG_INFO } from '../../Graphql/Query'
import CardEL from '../../shared/CardEL'
import Loader from '../Loader/Loader'

const Blog = () => {
  
  const {loading , data , errors} = useQuery(BLOG_INFO)
  if(loading) return <Loader />
  if(errors) return <h4>Error ... </h4>
  return (
    <Grid mt={2} container spacing={2} >
      {data.posts.map(post=>(
        <Grid item xs={12} sm={6} md={4} key={post.id} >
          <CardEL {...post}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Blog