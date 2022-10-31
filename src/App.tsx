import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';

const App: React.FC = () => (
  <BrowserRouter>
    <div className='container'>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/tasks' component={TasksPage}/>
      </Switch>
    </div>
    <Footer/>
  </BrowserRouter>
);

export default App;
