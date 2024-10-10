import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import Searchpage from './Searchpage';
import Welcomepage from '../Adminpage/Welcomepage';
import Errorpage from '../Adminpage/Errorpage';
import Adminsearchpage from '../Adminpage/Adminsearchpage';


const Routings = () => {
  return (
    <Routes>
       <Route path="/" element={<Mainpage/>}/> 
       <Route path="/Search" element={<Searchpage/>}/>
       <Route path="/Admin" element={<Welcomepage/>}/> 
       <Route path="*" element={<Errorpage/>}/> 
       <Route path="/Adminsearchpage" element={<Adminsearchpage/>}/> 
    </Routes>
  )
}

export default Routings