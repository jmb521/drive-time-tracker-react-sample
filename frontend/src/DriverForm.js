import React, {useState} from 'react'
import {addDriver} from './actions/driverActions'
import {connect} from 'react-redux'
const DriverForm = ({addDriver}) => {

    const [formData, setFormData] = useState({
        first_name: "", 
        last_name: ""
    })

    const handleOnChange = e => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addDriver(formData)

        setFormData({
            first_name: "", 
            last_name: ""
        })
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <label>First Name: </label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleOnChange} />
            <br />
            <label>Last Name: </label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleOnChange} />
            <br />
            <input type="submit" value="Create new driver" />
        </form>
    )
    

}

export default connect(null, {addDriver})(DriverForm)