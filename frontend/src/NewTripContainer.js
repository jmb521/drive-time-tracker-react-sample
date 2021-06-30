import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewTripForm from './NewTripForm'
class NewTripContainer extends Component {
    render() {
        const findDriver = this.props.drivers.find(driver => driver.id == this.props.match.params.driverId)
        console.log("findDriver", this.props)
        return(
            <div>
                <h2>{findDriver.firstName}</h2>
                <NewTripForm />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        drivers: state.drivers
    }
}

export default connect(mapStateToProps)(NewTripContainer)