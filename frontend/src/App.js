import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DriverContainer from './DriverContainer';
import DriverShow from './DriverShow'
import NewTripContainer from './NewTripContainer'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/drivers/new">
            <DriverContainer />
        </Route>
        <Route exact path="/drivers/:id" render={(routerProps) => <DriverShow {...routerProps} />} />
        <Route exact path="/drivers/:driverId/trips/new" render={(routerProps) => <NewTripContainer {...routerProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
