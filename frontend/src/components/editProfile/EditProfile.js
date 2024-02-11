import styled from '@emotion/styled';
import { Close, CloudUpload } from '@mui/icons-material'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function EditProfile(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleClosePress = () => {
    props.userAccEdit(false);
    setIsEmpty(false)
    setImageUrl(null)
  };

  const handleSubmit = () => {
    if(imageUrl==null){
        setIsEmpty(true)
    }else{
        props.userAccEdit(false);
        console.log('Image URL:', imageUrl);
        setImageUrl(null)
        setIsEmpty(false)
    }
    
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setIsEmpty(false);
    
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

      <Box sx={{ padding: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>Name</Typography>
          <Typography>-</Typography>
          <TextField id="outlined-basic" label="" variant="outlined" size='small' />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '10px', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>ProPic</Typography>
          <Typography>-</Typography>
          <Button component="label" variant="contained" startIcon={<CloudUpload />}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
          {imageUrl && (
            <Box>
                <Typography>file selected</Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ marginTop: '30px',}}>
            {isEmpty && (
                <Typography sx={{textAlign:'center'}}>You have to select a file</Typography>
            )}

            <Box
            sx={{
                display: 'flex',
                backgroundColor: '#40495B',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
               
                height: '50px',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'opacity 0.25s',
                '&:hover': { opacity: 0.9 },
                '&:active': { opacity: 0.7 }
            }}
            onClick={handleSubmit} 
            >
                
            <Typography sx={{ color: 'white' }}>Submit</Typography>
            </Box>
        </Box>

      </Box>


    </Box>
  )
}

export default EditProfile
