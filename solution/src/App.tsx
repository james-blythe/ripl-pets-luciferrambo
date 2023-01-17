import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import axios from 'axios';

const CustomizedGrid = lazy(() => import('./components/CustomizedGrid'));
const CustomizedHeader = lazy(() => import('./layout/CustmoizedHeader'));

const BASE_URL = '/pets.json';

const App = () => {
  const [pets, setPets] = useState<string[]>([]);

  const fetchPetsData = async () => {
    const result = await axios.get(BASE_URL);
    setPets(result.data.Pets);
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  return (
    <div className='App'>
      <CustomizedHeader />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/:id' element={<CustomizedGrid pets={pets} />} />
            <Route path='*' element={<Navigate to='/1' />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
