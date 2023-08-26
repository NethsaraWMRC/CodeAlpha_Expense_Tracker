import './App.css';
import Header from './components/header.js';
import AddRecord from './components/form.js';
import Records from './components/table.js';
import EditRecord from './components/editform';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header/>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:id' exact Component={EditRecord}/>

        </Routes>

      </div>
    </Router>
    
  );
}

function Home(){
  return( 
    <div>
      <AddRecord/>
      <Records/> 
    </div>
      
  )
}

export default App;
