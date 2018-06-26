import React, { Component } from 'react';
import axios from 'axios'

class MuseShow extends Component {

    state = {
        user: {},
        muse: []
    }

    componentDidMount() {
        const museId = this.props.match.params.museId
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/muses/${museId}`).then((res)=> {
            console.log(res)
            this.setState({
                user: res.data.user,
                muse: res.data.muse
            })
        })
    }

    render() {
        const user = this.state.user
        const muse = this.state.muse
        return (
            <div>
                <h4>{muse.name} by {user.name}</h4>
            </div>
        );
    }
}

export default MuseShow;