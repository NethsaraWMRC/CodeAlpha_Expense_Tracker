
import { Close} from '@mui/icons-material'
import { Box, IconButton,} from '@mui/material'
import React from 'react'
import Form from '../form/Form';

function UpdatedForm(props) {

  const handleClosePress = () => {
    props.recordEdit(false);
  };
  

  return (
    <Box
      sx={{
        position: 'absolute',
        backgroundColor: 'white',
        width: '450px',
        height: 'auto',
        borderRadius: '15px',
        zIndex: 100,
        display: props.open ? 'block' : 'none', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '5px'
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'right' }}>
        <IconButton onClick={handleClosePress}>
          <Close />
        </IconButton>
      </Box>

      <Box sx={{padding:'30px'}}>
        <Form recordEdit={props.recordEdit}/>
      </Box>
      


    </Box>
  )
}

export default UpdatedForm
