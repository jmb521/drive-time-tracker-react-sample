import React, {Component} from 'react'
import DriverForm from './DriverForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addDriver} from './actions/driverActions'
import thin_stripes from './thin_stripes.gif'
import {Route} from 'react-router-dom'
import Test from './Test'

class DriverContainer extends Component {

   

    handleAddUser = (driver) => {
        this.props.addDriver(driver)
    }
    


    render() {
        console.log("props in driverContainer", this.props)
        return(
            <div>
                
                <DriverForm handleAddUser={this.handleAddUser}/>
                {this.props.drivers ? this.props.drivers.map(driver => (
                    <p><Link to={{pathname: `/drivers/${driver.id}`}} > {driver.first_name} {driver.last_name} </Link></p>
        )) :  <img src={thin_stripes} alt="progress bar" />}
            <Route exact path="/test">
                <Test />
            </Route>
            </div>
        )
    }
}




export default connect(state => ({drivers: state.driverReducer.drivers}), {addDriver} )(DriverContainer)