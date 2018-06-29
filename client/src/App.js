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
import FreeComposition from './components/compositionComponents/FreeComposition';
import UserComposition from './components/compositionComponents/UserComposition';
import NewComposition from './components/compositionComponents/NewComposition';
import MountainLake from './pictures/paul-gilmore-387697-unsplash.jpg'
import MountainLakeSmall from './pictures/pietro-de-grandi-329904-unsplash.jpg'
import NavBarWrapper from './components/styleComponents/NavBarWrapper';

const MainDiv = styled.div`
  max-width: 100%;
  min-height: 99vh;
  background-size: cover;
  background-image: url(${MountainLake});
  @media(max-width: 730px){
    background-image: url(${MountainLakeSmall})
  }
`

class App extends Component {

  render() {
    return (
      <Router>
        <MainDiv>
          <NavBarWrapper>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users/freeCompostion'>Free Compose</Link>
          </NavBarWrapper>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/users/freeCompostion' component={FreeComposition} />
            <Route exact path='/users/:userId' component={UserShow} />
            <Route exact path='/users/:userId/edit' component={EditUser} />
            <Route exact path='/users/:userId/muses/new' component={MuseCreate} />
            <Route exact path='/users/:userId/muses/:museId' component={MuseShow} />
            <Route exact path='/users/:userId/muses/:museId/edit' component={EditMuse} />
            <Route exact path='/users/:userId/muses/:museId/comps/new' component={NewComposition} />
            <Route exact path='/users/:userId/muses/:museId/comps/:compId' component={UserComposition} />
          </Switch>
        </MainDiv>
      </Router>
    );
  }
}

export default App;
