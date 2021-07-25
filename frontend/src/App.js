import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DriverContainer from './DriverContainer';
import DriverShow from './DriverShow'
import DriverForm from './DriverForm';
import NewTripContainer from './NewTripContainer'
import { getAllDrivers} from './actions/driverActions';
import { getTrips } from './actions/tripActions';
import {connect} from 'react-redux'
import Nav from './components/navigation/Nav'


class App extends Component {


  componentDidMount() {
    if (this.props.drivers.length <= 1) {
      this.props.getAllDrivers()
    }
    if(this.props.trips.length <= 1) {
      this.props.getTrips()
    }
  }

  render() {
   

      return (
        <div className="App">
        <Router>
          <Nav />
          
          <Switch>
            
          <Route exact path="/drivers">
              <DriverContainer />
          </Route>
          <Route path="/drivers/new">
            <DriverForm />
          </Route>
          <Route exact path="/drivers/:id" render={(routerProps) => <DriverShow {...routerProps} />} />
          <Route exact path="/drivers/:driverId/trips/new" render={(routerProps) => <NewTripContainer {...routerProps} />} />
          
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(state => ({drivers: state.driverReducer.drivers, trips: state.trips}), {getAllDrivers, getTrips})(App);
