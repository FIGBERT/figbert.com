import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from "./components/highLevel/homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/figENC' />
        <Route path='/figbertMath' />
        <Route path='/blog' />
        <Route path='/world' />
        <Route path='/contact' />
        <Route path='about' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
