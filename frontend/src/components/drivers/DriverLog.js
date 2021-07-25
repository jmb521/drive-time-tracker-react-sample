import React from 'react'
import {connect} from 'react-redux'
const DriverLog = (props) => {
    const filteredTrips = props.trips.filter(t => t.driver_id === props.driver.id) 
    return(
        <div className="driver-log">
            <table className="log-table">
                <thead>
                    <tr>
                        <td>Start Time</td>
                        <td>End Time</td>
                        <td>Weather</td>
                        <td>Time of Day</td>
                        <td colSpan="2"></td>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredTrips ? filteredTrips.map(trip => 
                        <tr>
                            <td>{trip.start_time}</td>
                            <td>{trip.end_time}</td>
                            <td>{trip.weather}</td>
                            <td>{trip.time_of_day}</td>
                            <td>Edit button</td>
                            <td>Delete Button</td>
                        </tr>
                       ) : <tr><td> No trip info available.</td></tr>}

                </tbody>
            </table>
        </div>
    )
}
DriverLog.defaultProps = {
    driver: {
        id: 0
    }
}

export default connect(state => ({trips: state.trips}))(DriverLog)