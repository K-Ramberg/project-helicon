import React, { Component } from 'react';
import axios from 'axios'
import SiteOpen from '../styleComponents/SiteOpen';
import FormStyle from '../styleComponents/FormStyle';

class NewUser extends Component {

    state = {
        newUser: {
            name: '',
            description: ''
        }
    }

    handleFormChange = (event) => {
        const keyNameOfInput = event.target.name
        const userInput = event.target.value
        const newState = {...this.state}
        newState.newUser[keyNameOfInput] = userInput
        this.setState(newState)
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users', this.state.newUser).then((res)=> {
            this.props.history.push(`/users/${res.data._id}`)
        })
    }

    render() {
        return (
            <SiteOpen>
                <h1>Create your new User</h1>
                <FormStyle>
                    <form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="name">What should we call you?</label>
                        <input type="text"
                            placeholder="your User name"
                            name="name"
                            value={this.state.newUser.name}
                            onChange={this.handleFormChange} />
                        <label htmlFor="description">What would you like us to know about you?</label>    
                        <input type="text"
                            placeholder="tell us here"
                            name="description"
                            value={this.state.newUser.description}
                            onChange={this.handleFormChange} />
                        <button type="submit">Add Yourself</button>
                    </form>
                </FormStyle>
            </SiteOpen>
        );
    }
}

export default NewUser;