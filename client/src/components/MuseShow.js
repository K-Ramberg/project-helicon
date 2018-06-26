import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class MuseShow extends Component {

    state = {
        user: {},
        muse: []
    }

    componentDidMount() {
        const museId = this.props.match.params.museId
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/muses/${museId}`).then((res)=> {
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
                <p>
                    About: {muse.description}
                </p>
                <div>
                    In the key of: {muse.keySignature}
                </div>
                <div>
                    In {muse.timeSignature} time
                </div>
                <div>
                    at {muse.tempoBps}bps
                </div>
                <div>
                    A = {muse.tuningHz}Hz
                </div>
                <div>
                    <Link to={`/users/${user._id}`}>back to {user.name}'s page</Link>
                </div>
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}/edit`}>Edit this</Link>
                </div>
            </div>
        );
    }
}

export default MuseShow;