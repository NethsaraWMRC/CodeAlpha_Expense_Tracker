import { Box, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const categories = [
  { value: 'expense', label: 'Expense' },
  { value: 'income', label: 'Income' },
];

function Form(props) {
  const [description, setDescription] = useState('');
  const [prize, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('expense');

  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const [isprizeEmpty, setIsprizeEmpty] = useState(false);

  const handleSubmit = () => {
    if (description.trim() === '') {
      setIsDescriptionEmpty(true);
    } else if (prize.trim() === '') {
      setIsprizeEmpty(true);
      setIsDescriptionEmpty(false);

    } else {
      alert('Record is added');
      setIsprizeEmpty(false);
      setIsDescriptionEmpty(false);
      setDescription('')
      setPrice('')
      props.recordEdit(false)
      
    }
  };

  return (
    
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>Description</Typography>
          <Typography>-</Typography>
          <TextField
            error={isDescriptionEmpty}
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>prize</Typography>
          <Typography>-</Typography>
          <TextField
            error={isprizeEmpty}
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            value={prize}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>Category</Typography>
          <Typography>-</Typography>
          <TextField
            id="outlined-select-category"
            select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            variant="outlined"
            size="small"
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box onClick={handleSubmit} sx={{ display: 'flex', backgroundColor: '#40495B', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '30px', height: '50px', borderRadius: '15px', cursor: 'pointer', transition: 'opacity 0.25s', '&:hover': { opacity: 0.9 }, '&:active': { opacity: 0.7 } }}>
          <Typography sx={{ color: 'white' }}>Submit</Typography>
        </Box>
      </Box>
  );
}

export default Form;
