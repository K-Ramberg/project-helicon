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

    handleMuseInfoChange = (event) => {
        const keyNameValueOfInput = event.target.name
        const userInput = event.target.value
        const cloneState = { ...this.state }
        cloneState.muse[keyNameValueOfInput] = userInput
        this.setState(cloneState)
    }

    handleMuseInfoUpdateSubmit = () => {
        const museId = this.props.match.params.museId
        const userId = this.props.match.params.userId
        axios.patch(`/api/users/${userId}/muses/${museId}`, this.state.muse).then((res) => {
            console.log(res)
        })
    }

    render() {
        const user = this.state.user
        const muse = this.state.muse
        return (
            <div>
                <h4>edit {muse.name} by {user.name} here</h4>
                <div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={muse.name} onChange={this.handleMuseInfoChange} onBlur={()=> this.handleMuseInfoUpdateSubmit()}/>
                    </div>
                    <div>
                        <label htmlFor="description">Describe It:</label>
                        <textarea type="text" name="description" value={muse.description} onChange={this.handleMuseInfoChange} onBlur={()=> this.handleMuseInfoUpdateSubmit()}/>
                    </div>
                    <div>
                        <label htmlFor="keySignature">Key Signature:</label>
                        <input type="text" name="keySignature" value={muse.keySignature} onChange={this.handleMuseInfoChange} onBlur={()=> this.handleMuseInfoUpdateSubmit()}/>
                    </div>
                    <div>
                        <label htmlFor="timeSignature">Time Signature:</label>
                        <input type="text" name="timeSignature" value={muse.timeSignature} onChange={this.handleMuseInfoChange} onBlur={()=> this.handleMuseInfoUpdateSubmit()}/>
                    </div>
                    <div>
                        <label htmlFor="tempoBps">Tempo:</label>
                        <input type="number" name="tempoBps" value={muse.tempoBps} onChange={this.handleMuseInfoChange} onBlur={()=> this.handleMuseInfoUpdateSubmit()}/>
                    </div>
                    <div>
                        <label htmlFor="tuningHz">Tuning:</label>
                        <input type="number" name="tuningHz" value={muse.tuningHz} onChange={this.handleMuseInfoChange} onBlur={()=> this.handleMuseInfoUpdateSubmit()}/>
                    </div>
                </div>
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}`}>go back</Link>
                </div>
            </div>
        );
    }
}

export default EditMuse;