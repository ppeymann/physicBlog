import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { SEND_COMMENT } from '../../Graphql/Mutation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({slug}) => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [text , setText] = useState('')
  const [press , setPress] = useState(false)
  const [sentCom , {loading , data , error}] = useMutation(SEND_COMMENT,{
    variables:{
      name,
      email,
      text,
      slug
    }
  })

  const sendHandler = ()=>{
    if(name && email && text){
      sentCom()
      setPress(true)
    }else{
      toast.warn('لطفا فیلد هارا پر کنید');
    }
    if(data , press){
      toast.success("منتظر تایید کامنت باشید")
      setPress(false)
    }
  }

  return (
    <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",borderRadius:4 , py:1 , mt:5}}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant='h6' color="#6d02f7" fontWeight={800}  >فرم ارسال کامنت</Typography>
      </Grid>
      <Grid xs={12} m={2}>
        <TextField label="نام کاربری" sx={{width:"100%"}} value={name} onChange={(e=>setName(e.target.value))} /> 
      </Grid>
      <Grid xs={12} m={2}>
      <TextField label="ایمیل" sx={{width:"100%"}} value={email} onChange={(e=>setEmail(e.target.value))} /> 
      </Grid>
      <Grid xs={12} m={2}>
      <TextField label="کامنت" sx={{width:"100%"}} value={text} onChange={(e=>setText(e.target.value))} multiline minRows={4} /> 
      </Grid>
      <Grid item xs={12} m={2} >
        {loading ?<Button variant='contained' disabled  >درحال ارسال ...</Button>:<Button variant='contained' onClick={sendHandler}  >ارسال</Button> }
      </Grid>
      <ToastContainer/>
    </Grid>
  )
}

export default CommentForm