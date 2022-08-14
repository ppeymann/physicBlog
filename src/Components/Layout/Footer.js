import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Box variant="div">
      <Typography component="p" variant='p' bgcolor="#6d02f7" padding="10px" textAlign="center" mt={10} color="#fff" fontWeight={700} >
            وبلاگ فیزیک
        </Typography>
        <Typography fontSize={10} component="p" variant='p' bgcolor="#6d02f7" pb={1} textAlign="center" color="#fff" fontWeight={500}>
          نویسنده: پیمان ملک خطابی
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer