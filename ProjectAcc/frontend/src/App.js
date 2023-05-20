import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar'
import Accounts from './components/Accounts'
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';


function App() {
  return (
    <div>
        <NavBar />
        <Router>
        <Routes>
          <Route path='/' element={<Accounts />} />
          <Route path='/createPost' element={<CreateProject/>}/>
          <Route path='/updatePost/:id' element={<EditProject/>}/>
        </Routes>  
      </Router>
    </div>
  )
}

export default App