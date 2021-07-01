import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const DriverShow = (props) => {
    console.log("props", props)
    const driver = props.drivers.find(driver => driver.id === parseInt(props.match.params.id, 10)) 
    return(
        <div>
            {driver ? <div>
            {driver.firstName} {driver.lastName}
            <br />
                <Link to={{pathname:`${driver.id}/trips/new`}}>Add new trip</Link>
                </div> : <p>Driver not found</p>}
        </div>
    )
}

const mapStateToProps = state => {
    
    return {
        drivers: state.drivers
    }
}
export default connect(mapStateToProps)(DriverShow)