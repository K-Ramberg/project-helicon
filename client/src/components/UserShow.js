import React, { Component } from 'react';
import axios from 'axios'

class UserShow extends Component {
    
    state = {
        user: {}
    }

    componentDidMount(){
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res)=> {
            this.setState({
                user: res.data.user
            })
        })
    }

    render() {
        const user = this.state.user
        return (
            <div>
                <h3>{user.name}</h3>
                <h4>{user.description}</h4>
            </div>
        );
    }
}

export default UserShow;