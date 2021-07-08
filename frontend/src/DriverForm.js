import React, {Component} from 'react'


class DriverForm extends Component {

    state = {
        first_name: "", 
        last_name: ""
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddUser(this.state)

        this.setState({
            
                first_name: "", 
                last_name: "", 
            
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>First Name: </label>
                <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange} />
                <br />
                <label>Last Name: </label>
                <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange} />
                <br />
                <input type="submit" value="Create new driver" />
            </form>
        )
    }

}

export default DriverForm