import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudRain} from '@fortawesome/free-solid-svg-icons'
import {addTrip} from './actions/tripActions'
const NewTripForm = (props) => {
    const [formData, setFormData] = useState({
        weather: "", 
        time_of_day: "", 
        start_time: "", 
    })
   const history = useHistory() 

    const handleOnChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        props.addTrip({...formData, driver_id: props.driverId})
        history.push(`/drivers/${props.driverId}`)
    }
    

        return(
            <form onSubmit={handleOnSubmit}>
                <label for="weather"><FontAwesomeIcon icon={faCloudRain} />
                    <input type="radio" name="weather" value="Rainy" onChange={handleOnChange}/>
                </label>
                
                Sunny: <input type="radio" name="weather" value="Sunny" onChange={handleOnChange}/>
                <br />
                <label>Time of Day</label>
                <input type="text" name="time_of_day" value={formData.time_of_day} onChange={handleOnChange}/>
                <br />
                <label>Start Time: </label>
                <input type="time" name="start_time" value={formData.start_time} onChange={handleOnChange} />
                <br />
                <input type="submit" value="Start Driving!" />
            </form>
        )
    
}

export default connect(null, {addTrip})(NewTripForm)