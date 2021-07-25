import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import thin_stripes from './thin_stripes.gif'

class DriverContainer extends Component {

    render() {
        return(
            <div className="driver-box">
                {this.props.drivers ? this.props.drivers.map(driver => (
                    <div className="box"><Link to={{pathname: `/drivers/${driver.id}`}} > {driver.first_name} {driver.last_name} </Link></div>
        )) : <img src={thin_stripes} alt="progress bar" />}
           
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         drivers: state.driverReducer.drivers
//     }
// }


export default connect(state => ({drivers: state.driverReducer.drivers}) )(DriverContainer)