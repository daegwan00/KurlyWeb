import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginP from './login';
import SignUp from './signup';
import ShopCart from './shopping/ShopCart';
import HomePage from './headerComponent/HomePage';
import MainLayout from './Management/MainLayout';



function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage/>} />
    //     <Route path="/login" element={<LoginP/>} />
    //     <Route path="/signup" element={<SignUp/>} />
    //     <Route path="/ShopCart" element={<ShopCart/>} />
    //   </Routes>
    // </Router>
    <MainLayout/>
  );
}

export default App;