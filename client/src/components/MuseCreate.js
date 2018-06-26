import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class MuseCreate extends Component {

    state = {
        user: {},
        newMuse: {
            name: '',
            description: '',
            keySignature: '',
            timeSignature: '',
            tempoBps: '',
            tuningHz: ''
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            this.setState({ user: res.data.user })
        })
    }

    handleMuseInfoChange = (event) => {
        const keyNameValueOfInput = event.target.name
        const userInput = event.target.value
        const cloneState = {...this.state}
        cloneState.newMuse[keyNameValueOfInput] = userInput
        this.setState(cloneState)
        console.log(this.state.newMuse) 
    }

    render() {
        const user = this.state.user
        const newMuse = this.state.newMuse
        return (
            <div>
                <h3>making muses for {user.name}</h3>
                <div>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" value={newMuse.name} placeholder="I call it..." onChange={this.handleMuseInfoChange}/>
                        </div>
                        <div>
                            <label htmlFor="description">Describe It:</label>
                            <textarea type="text" name="description" value={newMuse.description} placeholder="It goes like..." onChange={this.handleMuseInfoChange}/>
                        </div>
                        <div>
                            <label htmlFor="keySignature">Key Signature:</label>
                            <input type="text" name="keySignature" value={newMuse.keySignature} placeholder="in the key of..." onChange={this.handleMuseInfoChange}/>
                        </div>
                        <div>
                            <label htmlFor="timeSignature">Time Signature:</label>
                            <input type="text" name="timeSignature" value={newMuse.timeSignature} placeholder="beats per measure" onChange={this.handleMuseInfoChange}/>
                        </div>
                        <div>
                            <label htmlFor="tempoBps">Tempo:</label>
                            <input type="number" name="tempoBps" value={newMuse.tempoBps} placeholder="beats per minute" onChange={this.handleMuseInfoChange}/>
                        </div>
                        <div>
                            <label htmlFor="tuningHz">Tuning:</label>
                            <input type="number" name="tuningHz" value={newMuse.tuningHz} placeholder="in Hz" onChange={this.handleMuseInfoChange}/>
                        </div>
                        <button type="submit">Carry a Muse</button>
                    </form>
                    <div>
                        <Link to={`/users/${user._id}`}>back to {user.name}'s Page</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MuseCreate;