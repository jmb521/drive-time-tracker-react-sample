import React, {Component} from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudRain} from '@fortawesome/free-solid-svg-icons'
import {addTrip} from './actions/tripActions'
class NewTripForm extends Component {
    state = {
        weather: "", 
        time_of_day: "", 
        start_time: "", 
        
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addTrip({...this.state, driver_id: this.props.driverId})

    }
    render() {

        return(
            <form onSubmit={this.handleOnSubmit}>
                <label for="weather"><FontAwesomeIcon icon={faCloudRain} />
                    <input type="radio" name="weather" value="Rainy" onChange={this.handleOnChange}/>
                </label>
                
                Sunny: <input type="radio" name="weather" value="Sunny" onChange={this.handleOnChange}/>
                <br />
                <label>Time of Day</label>
                <input type="text" name="time_of_day" value={this.state.time_of_day} onChange={this.handleOnChange}/>
                <br />
                <label>Start Time: </label>
                <input type="time" name="start_time" value={this.state.start_time} onChange={this.handleOnChange} />
                <br />
                <input type="submit" value="Start Driving!" />
            </form>
        )
    }
}

export default connect(null, {addTrip})(NewTripForm)