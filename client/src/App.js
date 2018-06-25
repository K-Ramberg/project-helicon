import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserHome from './components/UserHome';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            Heres will the nav will go
          </nav>
          <Switch>
            <Route exact path='/' component={UserHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
