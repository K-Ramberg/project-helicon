import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SiteOpen from '../styleComponents/SiteOpen';
import FormStyle from '../styleComponents/FormStyle';
import MuseSubStyle from '../styleComponents/MuseSubStyle';

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

    deleteMuse = (event) => {
        const museId = this.props.match.params.museId
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}/muses/${museId}`).then((res) => {
            console.log(res)
            this.props.history.push(`/users/${userId}`)
        })
    }

    render() {
        const user = this.state.user
        const muse = this.state.muse
        return (
            <SiteOpen>
                <h1>Edit <h5>{muse.name}</h5> by {user.name}</h1>
                <FormStyle>
                    <MuseSubStyle>
                    <div>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" value={muse.name} onChange={this.handleMuseInfoChange} onBlur={() => this.handleMuseInfoUpdateSubmit()} />
                        </div>
                        <div>
                            <label htmlFor="description">Describe It:</label>
                            <textarea type="text" name="description" value={muse.description} onChange={this.handleMuseInfoChange} onBlur={() => this.handleMuseInfoUpdateSubmit()} />
                        </div>
                        <div>
                            <label htmlFor="keySignature">Key Signature:</label>
                            <input type="text" name="keySignature" value={muse.keySignature} onChange={this.handleMuseInfoChange} onBlur={() => this.handleMuseInfoUpdateSubmit()} />
                        </div>
                        <div>
                            <label htmlFor="timeSignature">Time Signature:</label>
                            <input type="text" name="timeSignature" value={muse.timeSignature} onChange={this.handleMuseInfoChange} onBlur={() => this.handleMuseInfoUpdateSubmit()} />
                        </div>
                        <div>
                            <label htmlFor="tempoBps">Tempo:</label>
                            <input type="number" name="tempoBps" value={muse.tempoBps} onChange={this.handleMuseInfoChange} onBlur={() => this.handleMuseInfoUpdateSubmit()} />
                        </div>
                        <div>
                            <label htmlFor="tuningHz">Tuning:</label>
                            <input type="number" name="tuningHz" value={muse.tuningHz} onChange={this.handleMuseInfoChange} onBlur={() => this.handleMuseInfoUpdateSubmit()} />
                        </div>
                    </div>
                    <div>
                        <button onClick={(event) => this.deleteMuse(event)}>Delete This</button>
                    </div>
                    </MuseSubStyle>
                </FormStyle>
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}`}>go back</Link>
                </div>
            </SiteOpen>
        );
    }
}

export default EditMuse;