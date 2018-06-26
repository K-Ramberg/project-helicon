import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditMuse extends Component {
    state = {
        user: {},
        muse: {
            name: '',
            description: '',
            keySignature: '',
            timeSignature: '',
            tempoBps: '',
            tuningHz: ''
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

    render() {
        const user = this.state.user
        const muse = this.state.muse
        return (
            <div>
                edit {muse.name} by {user.name} here
                
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}`}>go back</Link>
                </div>
            </div>
        );
    }
}

export default EditMuse;