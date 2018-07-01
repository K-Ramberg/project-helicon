import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import UserHome from './components/userComponents/UserIndex';
import UserShow from './components/userComponents/UserShow';
import Home from './components/Home';
import EditUser from './components/userComponents/EditUser';
import MuseShow from './components/museComponents/MuseShow';
import MuseCreate from './components/museComponents/MuseCreate';
import EditMuse from './components/museComponents/EditMuse';
import FreeComposition from './components/compositionComponents/FreeComposition';
import UserComposition from './components/compositionComponents/UserComposition';
import NewComposition from './components/compositionComponents/NewComposition';
import MountainLake from './pictures/paul-gilmore-387697-unsplash.jpg'
import MountainLakeSmall from './pictures/pietro-de-grandi-329904-unsplash.jpg'
import NavBarWrapper from './components/styleComponents/NavBarWrapper';
import NewUser from './components/userComponents/NewUser';

const MainDiv = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-image: url(${MountainLake});
  @media(max-width: 730px){
    background-image: url(${MountainLakeSmall})
  }
`
const PageAlign = styled.div`
  height: 8vh;
  background-color: rgba(0,0,0,0.4);
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
          <PageAlign></PageAlign>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={UserHome} />
            <Route exact path='/users/new' component={NewUser}/>
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
