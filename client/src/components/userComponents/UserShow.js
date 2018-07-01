import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SiteOpen from '../styleComponents/SiteOpen';

class UserShow extends Component {

    state = {
        user: {},
        muses: []
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            this.setState({
                user: res.data.user,
                muses: res.data.user.muses
            })
        })
    }

    render() {
        const user = this.state.user
        const muses = this.state.muses
        return (
            <SiteOpen>
                <h1>{user.name}</h1>
                <h4>{user.description}</h4>
                <div>
                    <Link to={`/users/${user._id}/edit`}>Edit Yourself</Link>
                </div>
                <h3>Your Muses:</h3>
                <div>
                    {muses.map((muse) => {
                        return (
                            <div key={muse._id}>
                                <h5>{muse.name}</h5>
                                <Link to={`/users/${user._id}/muses/${muse._id}`}>Go to</Link>
                            </div>
                        )
                    })}
                    <p>
                        <Link to={`/users/${user._id}/muses/new`}>Add a Muse</Link>
                    </p>
                </div>
            </SiteOpen>
        );
    }
}

export default UserShow;