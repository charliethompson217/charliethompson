import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home.js';
import NotFound from './NotFound';
import Navbar from './Navbar.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';

function App() {

  return (
    <div className="App">

      <Navbar/>

      <div className='Body'>
        <Router>
          <Routes>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
          </Routes>
        </Router>
      </div>
      
      <div className='Footer'>
        <p>© 2024 Charles Thompson</p>
      </div>

    </div>
  );
}

export default App;
