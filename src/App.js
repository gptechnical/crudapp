import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './components/EmpListing';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';

const App = () => {
  return (
    <>
    <h1 className='text-center'>React Js Crud Operation</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmpListing/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route> 
      <Route path='/read/:id' element={<Read/>}></Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
