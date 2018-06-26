import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserHome extends Component {

    state = {
        users: [],
        newUser: {
            name: '',
            description: ''
        }
    }

    componentDidMount(){
        axios.get('/api/users').then((res)=> {
            this.setState({ users: res.data.users})
        }).catch((err) => {
            console.log("error with axios")
        })
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
        const users = this.state.users
        return (
            <div>
                <h4>Heres the user home</h4>
                {users.map((user)=> {
                    return(
                        <div key={user._id}>
                            <Link to={`/users/${user._id}`}>{user.name}</Link>
                            <p>{user.description}</p>
                        </div>
                    )
                })}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text"
                    placeholder="username"
                    name="name"
                    value={this.state.newUser.name}
                    onChange={this.handleFormChange}/>
                    <input type="text"
                    placeholder="about Me"
                    name="description"
                    value={this.state.newUser.description}
                    onChange={this.handleFormChange}/>
                    <button type="submit">Add Yourself</button>
                </form>
            </div>
        );
    }
}

export default UserHome;