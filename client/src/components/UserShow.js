import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends Component {
    
    state = {
        user: {},
        muses: []
    }

    componentDidMount(){
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res)=> {
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
            <div>
                <h3>{user.name}</h3>
                <h4>{user.description}</h4>
                <Link to={`/users/${user._id}/edit`}>Edit Yourself</Link>
                <div>
                    {muses.map((muse)=> {
                        return(
                            <div key={muse._id}>
                                {muse.name}
                                <Link to={`/users/${user._id}/muses/${muse._id}`}>Go to</Link>
                            </div>
                        )
                    })}
                    <p>
                        <button>carry a muse</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default UserShow;