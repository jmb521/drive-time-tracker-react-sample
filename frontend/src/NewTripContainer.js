import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewTripForm from './NewTripForm'
class NewTripContainer extends Component {
    render() {
        const driverId = parseInt(this.props.match.params.driverId, 10)
        const findDriver = this.props.drivers && this.props.drivers.find(driver => driver.id === driverId)
        const trips = this.props.trips && this.props.trips.filter(trip => trip.driver_id === driverId)
        return(
            <div>
                <h2>{findDriver.first_name}</h2>
                <NewTripForm driver={driverId}/>
                {trips}
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log("state in new trip container", state)
    return {
        drivers: state.driverReducer.drivers, 
        trips: state.trips
    }
}

export default connect(mapStateToProps)(NewTripContainer)