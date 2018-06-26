import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditUser extends Component {
    state = {
        user: {
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            this.setState({
                user: res.data.user
            })
        })
    }

    handleUserInfoChange(event) {
        const keyNameValueOfInput = event.target.name
        const userInput = event.target.value
        const cloneState = {...this.state}
        cloneState.user[keyNameValueOfInput] = userInput
        this.setState(cloneState)
    }

    handleUserInfoUpdateSubmit() {

    }

    render() {

        const user = this.state.user
        return (
            <div>
                <div>
                    <label htmlFor="name">Change name</label>
                    <input type="text"
                        name="name"
                        value={user.name}
                        onChange={(event) => this.handleUserInfoChange(event)} />
                </div>
                <div>
                    <label htmlFor="description">Change About Me</label>
                    <input type="text"
                        name="description"
                        value={user.description}
                        onChange={(keyPressEvent) => this.handleUserInfoChange(keyPressEvent)} />
                </div>
                <Link to={`/users/${user._id}`}>Cancel</Link>
            </div>
        );
    }
}

export default EditUser;