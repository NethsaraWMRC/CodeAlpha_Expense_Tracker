import React from 'react'
import {Box, Typography} from '@mui/material'
import proPic from '../../assests/propic.jpg'
import logout from '../../assests/shutdown.png'

function SideBar() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', minWidth:'345px',height:'100vh'}}>
        <Box sx={{display:'flex',position:'relative', flexDirection:'column', maxWidth:'345px', backgroundColor:'white', alignItems:'center', padding:'30px',height:'100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{height:'150px', width:'150px', borderRadius:'200px', backgroundColor:'blue',overflow:'hidden',}}>
                    <img src={proPic} style={{width:'100%', height:'auto',}} alt='proPic'/>
                </Box>
                <Typography sx={{marginTop:'10px', fontFamily:'poppins', fontSize:'18px', fontWeight:'500'}}>Ravindu Nethsara</Typography>
            </Box>

            <Box sx={{marginTop:'30px', width:'100%'}}> 
                <Typography sx={{textAlign:'right', color:'#7D8597', fontSize:'12px', fontFamily:'poppins', marginBottom:'20px'}}>Last 7 Days</Typography> 
                
                <Box sx={{display:'flex',justifyContent:'space-between', fontFamily:'poppins', fontSize:'16px', marginBottom:'10px'}}>
                    <Typography sx={{color:'#101318'}}>Total Income -</Typography>
                    <Typography sx={{color:'#00DD3E', fontWeight:'600'}}>Rs. 560</Typography>
                </Box> 

                <Box sx={{display:'flex',justifyContent:'space-between', fontFamily:'poppins', fontSize:'16px'}}>
                    <Typography sx={{color:'#101318'}}>Total Expense -</Typography>
                    <Typography sx={{color:'#FF7043', fontWeight:'600'}}>Rs. 1320</Typography>
                </Box>     
            </Box>
        
        </Box>
        <Box sx={{position:'relative',display:'flex',backgroundColor:'#40495B', width:'100%',alignItems:'center',justifyContent:'center', height:'60px',cursor:'pointer',transition:'opacity 0.25s', '&:hover':{opacity:0.9},'&:active':{opacity:0.7}}}>
            <Box sx={{width:'50%',alignItems:'center', display:'flex',gap:'20px'}}>
                <img src={logout} alt='logout'/>
                <Typography sx={{color:'white'}}>Logout</Typography>
            </Box>
           
        </Box>
    </Box> 
  )
}

export default SideBar
