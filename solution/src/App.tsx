import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomizedGrid from './components/CustomizedGrid';
import CustomizedHeader from './layout/CustmoizedHeader';

function App() {
  return (
    <div className='App'>
      <CustomizedHeader />
      {/* <Router> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <Routes> */}
      <CustomizedGrid />
      {/* </Routes> */}
      {/* </Suspense> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
