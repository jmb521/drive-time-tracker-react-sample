import React from 'react'
import {connect} from 'react-redux'
import NewTripForm from './NewTripForm'
import {useParams} from 'react-router-dom'

const NewTripContainer = (props) => {

    const {driverId} = useParams()
    console.log("params", driverId)
    const findDriver = props.drivers.find(driver => driver.id === driverId)
    return(
        <div>
            <h2>{findDriver && findDriver.first_name}</h2>
            <NewTripForm driverId={driverId} />
            test
        </div>
    )
}

const mapStateToProps = state => {
    return {
        drivers: state.driverReducer.drivers, 
        
    }
}

export default connect(mapStateToProps)(NewTripContainer)