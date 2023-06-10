// App.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CategoryPage from './pages/CategoryPage';
import UserProfilePage from './pages/UserProfilePage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:id" component={CategoryPage} />
        <Route path="/user/profile" component={UserProfilePage} />
      </Switch>
    </div>
  );
};

export default App;
