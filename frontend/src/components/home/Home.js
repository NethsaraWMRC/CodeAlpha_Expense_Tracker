import React, { useState } from 'react'
import SideBar from '../sideBar/SideBar'
import { Box, Typography } from '@mui/material'
import Card from '../card/Card'
import moneyBag from '../../assests/moneyBag.png'
import money from '../../assests/money.png'
import DataTable from '../table/DataTable'
import Form from '../form/Form'
import EditProfile from '../editProfile/EditProfile'
import UpdatedForm from '../updateForm/UpdateForm'

function Home() {
  const [userEdit, setUserEdit] = useState(false);
  const [recordEdit, setRecordEdit] = useState(false);
  const [id, setId] = useState('');
  const [ income, setIncome ] = useState(null)
  const [ expense, setExpense ] = useState(null)
  const [userId, setUserId] = useState('');

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F4F4F4', height: '100vh', position: 'relative' }}>
      <SideBar userAccEdit={setUserEdit} userIdNum={setUserId}/>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          zIndex: 99, 
          display: userEdit || recordEdit ? 'block' : 'none', 
        }}
      ></Box>

      <EditProfile open={userEdit} userAccEdit={setUserEdit} userIdNum={userId}/>
      <UpdatedForm open={recordEdit} recordEdit={setRecordEdit} recordId={id}/>


      <Box sx={{ padding: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Card img={moneyBag} price={income} tag={'Income'} />
          <Card img={money} price={expense} tag={'Expense'} />
        </Box>

        <Box>
          <DataTable recordEdit={setRecordEdit} recordId={setId} income={setIncome} expense={setExpense}/>
        </Box>
        
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', backgroundColor: 'white', padding: '20px 30px' }}>
        <Typography sx={{ fontFamily: 'poppins', fontSize: '16px', color: '#101318' }}>Add a new record</Typography>
        <Form />
      </Box>

    </Box>

  )
}

export default Home
