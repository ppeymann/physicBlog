import { useQuery } from '@apollo/client'
import { Avatar, Grid, Typography ,Divider} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { AUTHORS_INFO } from '../../Graphql/Query'
import Loader from '../Loader/Loader'

const Authors = () => {

  const {loading , data , errors} = useQuery(AUTHORS_INFO)

  if(loading) return <Loader />
  if(errors) return <h4>Errors ...</h4>
  const {authors} = data;
  return (
    <Grid mt={4.2} container  sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4, }} >

      {authors.map((author,index)=>(
        <React.Fragment  key={author.id} >
        <Grid xs={12} padding={2} item>
          <Link to={`/authors/${author.slug}`} style={{ display:"flex", alignItems:"center" , textDecoration:"none"}} >
          <Avatar sx={{marginLeft:2 }} src={author.avatar.url} />
          <Typography color="text.secondary" component="p" variant='p'> {author.name} </Typography>
          </Link>
        </Grid>
        {
          index !== data.authors.length - 1 && 
         ( <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
        )
        }
        </React.Fragment>
      ))}

    </Grid>
  )
}

export default Authors