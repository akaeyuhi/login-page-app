import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [token]);
  return (<div className='container'>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<TasksPage />} />
      <Route path='*' element={<main className="main main__welcome">404 not found</main>} />
    </Routes>
    <Footer />
  </div>);
};

export default App;
