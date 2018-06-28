import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import UserHome from './components/UserIndex';
import UserShow from './components/UserShow';
import Home from './components/Home';
import EditUser from './components/EditUser';
import MuseShow from './components/MuseShow';
import MuseCreate from './components/MuseCreate';
import EditMuse from './components/EditMuse';
import Composition from './components/compositionComponents/Composition';

const NavStyle = styled.div`
  a {
    margin: 0 20px;
  }
`

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <NavStyle>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users/compostion'>Free Compose</Link>
          </NavStyle> 
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/users/compostion' component={Composition}/>
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
