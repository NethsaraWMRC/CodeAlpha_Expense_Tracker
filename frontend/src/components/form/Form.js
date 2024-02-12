import { Box, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createRecord, updateRecord, fetchOneRecord } from '../../services/recordService';


const categories = [
  { value: 'expense', label: 'Expense' },
  { value: 'income', label: 'Income' },
];

function Form(props) {

  const date = new Date().toISOString().split('T')[0];

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('expense');

  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);
  const [ispriceEmpty, setIsPriceEmpty] = useState(false);

  useEffect(()=>{
    if(props.tag==="updateForm"){
      fetchARecord();
    }
  },[props.id])

  const fetchARecord = async ()=>{
    const data = await fetchOneRecord(props.id);
    setPrice(data.price);
    setDescription(data.description);
    setCategory(data.category);

  }

  const handleSubmit = async () => {
    if (description.trim() === '') {
      setIsDescriptionEmpty(true);

    } else if (price === '') {
      setIsPriceEmpty(true);
      setIsDescriptionEmpty(false);

    } else {
      try {

        if(props.tag==='updateForm'){
          await updateRecord({ price, description, category, date }, props.id);
          
          alert('Record is updated');
          props.recordEdit(false)

        }else{
          await createRecord({ price, description, category, date });
          alert('Record is added');
        }

        setIsPriceEmpty(false);
        setIsDescriptionEmpty(false);
        setDescription('');
        setPrice('');

      } catch (error) {
        console.error('Error creating record:', error);
        alert('Error adding record. Please try again later.');
      }
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
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>price</Typography>
          <Typography>-</Typography>
          <TextField
            error={ispriceEmpty}
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: '14px', color: '#101318', width: '120px' }}>Category</Typography>
          <Typography>-</Typography>
          <TextField
            id="outlined-select-category"
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
