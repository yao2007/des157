import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from './components/users'
import createUser from './components/UsersCreate/createUser'
import editUser from './components/UsersEdit/editUser'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/createUser" component={createUser} />
            <Route path="/editUser/:id" component={editUser} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
