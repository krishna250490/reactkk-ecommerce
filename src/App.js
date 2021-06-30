
import './App.css';
import React from 'react';
import Navbar from './componets/Navbar';
import Alluser from './componets/Alluser';
import Add from './componets/Add';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Notfound from './componets/Notfound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/alluser" component={Alluser} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
