import React from 'react';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} exact />
      </Switch>
    </div>
  );
}

export default App;
