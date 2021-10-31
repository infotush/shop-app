import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

const HatsPage = () => <div>Hats Page</div>;

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
