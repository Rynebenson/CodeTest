import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './store';
import Index from './views/Index';

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default App;
