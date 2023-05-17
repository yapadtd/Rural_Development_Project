import './App.css';
import AddPackage from './Component/AddPackage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Component/footer';
import EditPackage from './Component/EditPackage';
import ViewPacks from './Component/ViewPacks';
import Home from './Component/Home';
import Header from './Component/Header';
import Carousel  from './Component/Carousel';
import Admin from './Component/Admin';

import Rconfirm from './Component/Rconfirm';
import PDF from './Component/PDF'; 





function App() {


 


  return (

    


    <Router>
     
     <Header />
     <Carousel />
      <Routes>
      
        <Route path='/' element={<Home />}/> 
        <Route path='/addPackage/*' element={<AddPackage />}/>
        <Route path='/allPackages/*' element={<ViewPacks />}/>
        <Route path='/update/:id/*' element={<EditPackage />}/>
        <Route path='/add/*' element={<Admin />}/>
        <Route path='/admin/*' element={<Admin />}/>
       
        <Route path='/Rconfirm/*' element={<Rconfirm />}/>
        <Route path='/confirm/:id/*' element={<Rconfirm />}/>
        <Route path='/PDF/*' element={<PDF />}/>
        
        
        
      </Routes>
      <Footer/>
      
    </Router>
 

    
  );
}

export default App;
