import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';

const App: React.FC = () => (
  <Router>
    <div className='container'>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/tasks' element={<TasksPage />}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;
