import { Box, Typography } from '@mui/material'
import React from 'react'

function Card(props) {
  return (
    <Box sx={{
        display:'flex',
        minWidth:'335px', 
        height:'180px', 
        borderRadius:'15px', 
        padding:'20px', 
        justifyContent:'space-between',
        backgroundColor:props.tag === 'Expense' ? '#FF7043' : 'white',
        }}>
      <Box>
        <Typography sx={{fontFamily:'poppins', fontSize:'16px', fontWeight:'500', color:'#40495B'}}>Today {props.tag}</Typography>
        <Typography sx={{fontFamily:'poppins', fontSize:'32px', fontWeight:'600', color:'#40495B', marginTop:'10px'}}>{props.price}</Typography>
      </Box>
    
      <img src={props.img} alt='moneyBag'/>

    </Box>
  )
}

export default Card
