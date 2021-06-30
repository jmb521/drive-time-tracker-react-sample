import React, {Component} from 'react'


class DriverForm extends Component {

    state = {
        id: 1,
        firstName: "", 
        lastName: ""
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddUser(this.state)

        this.setState((prevState) => {
            return {
                firstName: "", 
                lastName: "", 
                id: prevState.id + 1
            }
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>First Name: </label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnChange} />
                <br />
                <label>Last Name: </label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnChange} />
                <br />
                <input type="submit" value="Create new driver" />
            </form>
        )
    }

}

export default DriverForm