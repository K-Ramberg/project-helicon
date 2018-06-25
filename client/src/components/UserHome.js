import React, { Component } from 'react';
import axios from 'axios'

class UserHome extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        axios.get('/api/users').then((res)=> {
            this.setState({ users: res.data.users})
        }).catch((err) => {
            console.log("error with axios")
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
                            <h1>{user.name}</h1>
                            <p>{user.description}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UserHome;