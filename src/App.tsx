import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';

const App: React.FC = () => (
  <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route path='/login' element={LoginPage}/>
        <Route path='/tasks' element={TasksPage}/>
      </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
);

export default App;
