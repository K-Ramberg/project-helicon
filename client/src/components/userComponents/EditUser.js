import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SiteOpen from '../styleComponents/SiteOpen';
import FormStyle from '../styleComponents/FormStyle';


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

    handleUserInfoChange = (event) => {
        const keyNameValueOfInput = event.target.name
        const userInput = event.target.value
        const cloneState = { ...this.state }
        cloneState.user[keyNameValueOfInput] = userInput
        this.setState(cloneState)
    }

    handleUserInfoUpdateSubmit = () => {
        const userId = this.props.match.params.userId
        axios.patch(`/api/users/${userId}`, this.state.user).then((res) => {
            console.log(res)
        })
    }

    deleteUser = (event) => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`).then((res) => {
            console.log(res)
            this.props.history.push(`/users`)
        })
    }

    render() {

        const user = this.state.user
        return (
            <SiteOpen>
                    <h1>Edit your current User</h1>
                <FormStyle>
                    <div>
                        <label htmlFor="name">Change you User name</label>
                        <input type="text"
                            name="name"
                            value={user.name}
                            onChange={(event) => this.handleUserInfoChange(event)}
                            onBlur={() => this.handleUserInfoUpdateSubmit()} />
                    </div>
                    <div>
                        <label htmlFor="description">Edit your information</label>
                        <input type="text"
                            name="description"
                            value={user.description}
                            onChange={(keyPressEvent) => this.handleUserInfoChange(keyPressEvent)}
                            onBlur={() => this.handleUserInfoUpdateSubmit()} />
                    </div>
                    <div>
                        <button onClick={(event) => this.deleteUser(event)}>Delete user?</button>
                    </div>
                </FormStyle>
                <Link to={`/users/${user._id}`}>Back to your page</Link>
            </SiteOpen>
        );
    }
}

export default EditUser;