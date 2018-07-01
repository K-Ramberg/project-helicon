import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SiteOpen from '../styleComponents/SiteOpen';
import MuseSubStyle from '../styleComponents/MuseSubStyle';

class MuseShow extends Component {

    state = {
        user: {},
        muse: {
            compositions: []
        }
    }

    componentDidMount() {
        const museId = this.props.match.params.museId
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}/muses/${museId}`).then((res) => {
            this.setState({
                user: res.data.user,
                muse: res.data.muse
            })
        })
    }

    deleteComposition = (compId) => {
        const userId = this.props.match.params.userId
        const museId = this.props.match.params.museId
        axios.delete(`/api/users/${userId}/muses/${museId}/comps/${compId}`).then((res) => {
            this.setState({
                user: res.data.user,
                muse: res.data.muse
            })
        })
    }

    render() {
        const user = this.state.user
        const muse = this.state.muse
        const compositions = muse.compositions
        return (
            <SiteOpen>
                <h1><h5>{muse.name}</h5> by {user.name}</h1>
                <p>
                    <h6>About:</h6> {muse.description}
                </p>
                <p>
                    <h6>In the key of:</h6> {muse.keySignature}
                </p>
                <p>
                    In <h5>{muse.timeSignature}</h5> time
                </p>
                <p>
                    at <h5>{muse.tempoBps}</h5> bps
                </p>
                <p>
                    A = <h5>{muse.tuningHz}Hz</h5>
                </p>
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}/edit`}>Edit this</Link>
                </div>
                <div>
                    <h4>Composition Ideas for <h5>{muse.name}</h5></h4>
                    {compositions.map((comp) => {
                        return (
                            <MuseSubStyle key={comp._id}>
                                <Link to={`/users/${user._id}/muses/${muse._id}/comps/${comp._id}`}>{comp.name}</Link>
                                <button onClick={() => this.deleteComposition(comp._id)}>remove this compostion</button>
                            </MuseSubStyle>
                        )
                    })}
                </div>
                <p>
                    <Link to={`/users/${user._id}/muses/${muse._id}/comps/new`}>Compose</Link>
                </p>
                <p>
                    <Link to={`/users/${user._id}`}>back to {user.name}'s page</Link>
                </p>
            </SiteOpen>
        );
    }
}

export default MuseShow;