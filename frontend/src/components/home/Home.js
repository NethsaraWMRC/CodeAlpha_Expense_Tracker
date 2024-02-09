import React from 'react'
import SideBar from '../sideBar/SideBar'
import { Box } from '@mui/material'

function Home(){
    return( 
      <Box sx={{backgroundColor:'#F4F4F4', height:'100vh'}}>
        <SideBar/>
      </Box>
        
    )
  }

export default Home
