import React from 'react'
import SideBar from '../sideBar/SideBar'
import { Box } from '@mui/material'
import Card from '../card/Card'
import moneyBag from '../../assests/moneyBag.png'
import money from '../../assests/money.png'
import DataTable from '../table/DataTable'

function Home(){
    return( 
      <Box sx={{display:'flex',backgroundColor:'#F4F4F4', height:'100vh'}}>
        <SideBar/>

        <Box sx={{padding:'20px'}}>
          <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
            <Card img={moneyBag} price={'Rs. 200'} tag={'Income'}/>
            <Card img={money} price={'Rs. 1600'} tag={'Expense'}/>
          </Box>
          <DataTable/>
        </Box>
        
      </Box>
        
    )
  }

export default Home
