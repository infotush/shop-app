import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header-component';
import AuthPage from './pages/auth-page/auth-page-component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={AuthPage} />
      </Switch>
    </div>
  );
};

export default App;
