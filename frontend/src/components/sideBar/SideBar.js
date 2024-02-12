import React, { useState } from 'react'
import {Box, IconButton, Menu, MenuItem, Typography} from '@mui/material'
import proPic from '../../assests/propic.jpg'
import { KeyboardArrowDown } from '@mui/icons-material';
import { Calculation } from '../table/Calculation';
import { fetchAllRecord } from '../../services/recordService';
// import logout from '../../assests/shutdown.png'

function SideBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [day, setDay] = useState('Last 7 Days')

    const [rows, setRows] = React.useState([]);
    const { totalIncome, totalExpense } = Calculation(rows, day);

    React.useEffect(()=>{
        fetchData();
    },[rows])

  const fetchData = async ()=>{
    const data = await fetchAllRecord()
    setRows(data)
  }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = (item) => {
        setDay(item)
        setAnchorEl(null);
        
    };

    const handlePress = ()=>{
        props.userAccEdit(true)
    }

  return (
    <Box sx={{display:'flex', flexDirection:'column', minWidth:'345px',height:'100vh'}}>
        <Box sx={{display:'flex',position:'relative', flexDirection:'column', maxWidth:'345px', backgroundColor:'white', alignItems:'center', padding:'20px',height:'100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
               
                <Box sx={{height:'150px', width:'150px', borderRadius:'200px',overflow:'hidden', cursor:'pointer', transition:'opacity 0.25s','&:active':{opacity:'0.8'}}}>
                    <img src={proPic} style={{width:'100%', height:'auto',}} alt='proPic' onClick={handlePress}/>  
                </Box>

                <Typography sx={{marginTop:'10px', fontFamily:'poppins', fontSize:'18px', fontWeight:'500'}}>Ravindu Nethsara</Typography>

            </Box>

            <Box sx={{marginTop:'30px', width:'85%'}}> 
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap:'10px', alignItems: 'center' ,marginBottom: '20px',}}>
                    <Typography
                    sx={{
                      
                        color: '#7D8597',
                        fontSize: '12px',
                        fontFamily: 'poppins',
                        
                    }}
                    >
                    {day}
                    </Typography>

                    <IconButton aria-label="category-filter" onClick={handleOpenMenu}>
                        <KeyboardArrowDown />
                    </IconButton>

                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} elevation={0}>
                        <MenuItem onClick={()=>handleCloseMenu('Last 7 Days')}>Last 7 Days</MenuItem>
                        <MenuItem onClick={()=>handleCloseMenu('Last Month')}>Last Month</MenuItem>
                        <MenuItem onClick={()=>handleCloseMenu('Last 3 Months')}>Last 3 Months</MenuItem>
                        <MenuItem onClick={()=>handleCloseMenu('Last Year')}>Last Year</MenuItem>
                    </Menu>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between', fontFamily:'poppins', fontSize:'16px', marginBottom:'20px'}}>
                    <Typography sx={{color:'#101318'}}>Total Income -</Typography>
                    <Typography sx={{color:'#00DD3E', fontWeight:'600'}}>Rs. {totalIncome}</Typography>
                </Box> 

                <Box sx={{display:'flex',justifyContent:'space-between', fontFamily:'poppins', fontSize:'16px'}}>
                    <Typography sx={{color:'#101318'}}>Total Expense -</Typography>
                    <Typography sx={{color:'#FF7043', fontWeight:'600'}}>Rs. {totalExpense}</Typography>
                </Box>     
            </Box>
            
        
        </Box>

        {/* <Box sx={{position:'relative',display:'flex',backgroundColor:'#40495B', width:'100%',alignItems:'center',justifyContent:'center', height:'60px',cursor:'pointer',transition:'opacity 0.25s', '&:hover':{opacity:0.9},'&:active':{opacity:0.7}}}>
            <Box sx={{width:'50%',alignItems:'center', display:'flex',gap:'20px'}}>
                <img src={logout} alt='logout'/>
                <Typography sx={{color:'white'}}>Logout</Typography>
            </Box>
           
        </Box> */}

        
    </Box> 
  )
}

export default SideBar
