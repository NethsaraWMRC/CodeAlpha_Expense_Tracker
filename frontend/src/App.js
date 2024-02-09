import './App.css';
import EditRecord from './components/editform';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home.js';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box >    
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/edit/:id' exact Component={EditRecord}/>

        </Routes>

      </Box>
    </Router>
    
  );
}



export default App;
