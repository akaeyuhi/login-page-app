import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Footer from './components/Footer';

const App: React.FC = () => (
  <BrowserRouter>
    <div className='container'>
      <Switch></Switch>
    </div>
    <Footer/>
  </BrowserRouter>
);

export default App;
