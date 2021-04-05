import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Main } from './pages/Main'
import { About } from './pages/About'
import { Navbar } from './components/Navbar';


const App: React.FC = () => {
   return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Main} path='/' exact/>
          <Route component={About} path='/about' /> 
        </Switch>        
      </BrowserRouter>
  );
}

export default App;
