import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <div className='container'>
      <Switch></Switch>
    </div>
  </BrowserRouter>
);

export default App;
