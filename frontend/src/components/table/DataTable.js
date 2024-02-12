import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Delete, Edit, KeyboardArrowDown } from '@mui/icons-material';
import { fetchAllRecord, deleteRecord } from '../../services/recordService';
import { Calculation } from './Calculation';

const columns = [
  { id: 'description', label: 'Description', minWidth: 250 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Options',
    label: 'Options',
    minWidth: 150,
    align: 'right',
  },
];


export default function DataTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterCategory, setFilterCategory] = React.useState(null);
  const [rows, setRows] = React.useState([]);
  const { totalIncome, totalExpense } = Calculation(rows, 'today');

  React.useEffect(()=>{
    fetchData();
    
    props.income(totalIncome);
    props.expense(totalExpense);
  },[rows])

  const fetchData = async ()=>{
    const data = await fetchAllRecord()
    setRows(data)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    try{
      await deleteRecord(id)
    }catch(err){
      alert("Error deleting")
    }
  };

  const handleEdit = (id) => {
    props.recordEdit(true)
    props.recordId(id)
  };

  const handleCategoryFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryFilterClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryFilterSelect = (category) => {
    setFilterCategory(category);
    setAnchorEl(null);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '15px' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id === 'category' ? (
                    <Box display="flex" alignItems="center">
                      <span>{column.label}</span>
                      <IconButton
                        aria-label="category-filter"
                        onClick={handleCategoryFilterClick}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCategoryFilterClose}
                      >
                        <MenuItem onClick={() => handleCategoryFilterSelect(null)}>All</MenuItem>
                        <MenuItem onClick={() => handleCategoryFilterSelect('expense')}>Expense</MenuItem>
                        <MenuItem onClick={() => handleCategoryFilterSelect('income')}>Income</MenuItem>
                      </Menu>
                    </Box>
                  ) : (
                    <span>{column.label}</span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter(row => !filterCategory || row.category === filterCategory)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .reverse()
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'Options' ? (
                            <Box>
                              <IconButton aria-label="edit" onClick={() => handleEdit(row._id)}>
                                <Edit />
                              </IconButton>
                              
                              <IconButton aria-label="delete" onClick={() => handleDelete(row._id)}>
                                <Delete />
                              </IconButton>
                            </Box>
                          ) : (
                            column.id === 'category' ? (
                              <span style={{ color: value === 'income' ? '#00DD3E' : '#FF7043' }}>{value}</span>
                            ) : (
                              column.format && typeof value === 'number' ? column.format(value) : value
                            )
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
