import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserHome from './components/UserIndex';
import UserShow from './components/UserShow';
import Home from './components/Home';
import EditUser from './components/EditUser';
import MuseShow from './components/MuseShow';
import MuseCreate from './components/MuseCreate';
import EditMuse from './components/EditMuse';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
          </nav> 
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/users/:userId' component={UserShow}/>
            <Route exact path='/users/:userId/edit' component={EditUser}/>
            <Route exact path='/users/:userId/muses/new' component={MuseCreate}/>
            <Route exact path='/users/:userId/muses/:museId' component={MuseShow}/>
            <Route exact path='/users/:userId/muses/:museId/edit' component={EditMuse}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
