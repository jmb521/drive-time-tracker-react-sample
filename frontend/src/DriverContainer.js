import React, {Component} from 'react'
import DriverForm from './DriverForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addDriver} from './actions/driverActions'
class DriverContainer extends Component {

    handleAddUser = (driver) => {
        this.props.addDriver(driver)
    }


    render() {
        console.log("props in driverContainer", this.props)
        return(
            <div>
                <DriverForm handleAddUser={this.handleAddUser}/>
                {this.props.drivers.map(driver => (
                    <p><Link to={{pathname: `/drivers/${driver.id}`}} > {driver.firstName} {driver.lastName} </Link></p>
        ))}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {drivers: state.drivers}
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         addDriver: (driver) => dispatch(addDriver(driver))
//     }
// }


export default connect(state => ({drivers: state.drivers}), {addDriver} )(DriverContainer)