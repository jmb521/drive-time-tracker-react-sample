import React, {Component} from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudRain} from '@fortawesome/free-solid-svg-icons'
import {addTrip} from './actions/tripActions'
class NewTripForm extends Component {
    state = {
        weather: "", 
        timeOfDay: "", 
        startTime: "", 
        
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addTrip(this.state)

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
                <input type="text" name="timeOfDay" value={this.state.timeOfDay} onChange={this.handleOnChange}/>
                <br />
                <label>Start Time: </label>
                <input type="time" name="startTime" value={this.state.startTime} onChange={this.handleOnChange} />
                <br />
                <input type="submit" value="Start Driving!" />
            </form>
        )
    }
}

export default connect(null, {addTrip})(NewTripForm)