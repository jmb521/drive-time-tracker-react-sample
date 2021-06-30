import React, {Component} from 'react'
import DriverForm from './DriverForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class DriverContainer extends Component {

    handleAddUser = (driver) => {
        this.props.dispatch({type: "ADD_DRIVER", driver: driver})
    }


    render() {
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



export default connect(state => ({drivers: state.drivers}) )(DriverContainer)