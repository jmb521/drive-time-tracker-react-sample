import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DriverContainer from './DriverContainer';
import DriverShow from './DriverShow'
import NewTripContainer from './NewTripContainer'
import { getAllDrivers } from './actions/driverActions';
import {connect} from 'react-redux'
class App extends Component {


  componentDidMount() {
    console.log("props in app", this.props)
    this.props.getAllDrivers()
  }
  render() {

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
}

export default connect(null, {getAllDrivers})(App);
