import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewTripForm from './NewTripForm'
class NewTripContainer extends Component {
    render() {
        const driverId = parseInt(this.props.match.params.driverId, 10)
        const findDriver = this.props.drivers.find(driver => driver.id === driverId)
        return(
            <div>
                <h2>{findDriver && findDriver.first_name}</h2>
                <NewTripForm driverId={driverId} history={this.props.history}/>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        drivers: state.driverReducer.drivers, 
        
    }
}

export default connect(mapStateToProps)(NewTripContainer)