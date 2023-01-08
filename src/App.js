import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import Tasks from './components/pages/Tasks'
import Reports from './components/pages/Reports'
import Settings from './components/pages/Settings'
import SignUp from './components/pages/SignUp'

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/Tasks' exact element={< Tasks />}/>
      <Route path='/Reports' exact element={< Reports />}/>
      <Route path='/Settings' exact element={< Settings />}/>
      <Route path='/SignUp' exact element={< SignUp />}/>
    </Routes>
   </Router>
  );
}

export default App;
