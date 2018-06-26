import React, { Component } from 'react';
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
            console.log(res)
            this.setState({ user: res.data.user })
        })
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
                            <input type="text" name="name" value={newMuse.name} placeholder="I call it..." />
                        </div>
                        <div>
                            <label htmlFor="description">Describe it:</label>
                            <textarea name="name" value={newMuse.description} placeholder="I call it..." />
                        </div>
                        <div>
                            <label htmlFor="keySignature">Key Signature:</label>
                            <input type="text" name="keySignature" value={newMuse.keySignature} placeholder="in the key of..."/>
                        </div>
                        <div>
                            <label htmlFor="timeSignature">Time Signature:</label>
                            <input type="text" name="timeSignature" value={newMuse.timeSignature} placeholder="beats per measure"/>
                        </div>
                        <div>
                            <label htmlFor="tempoBps">Tempo:</label>
                            <input type="number" name="tempoBps" value={newMuse.tempoBps} placeholder="beats per minute"/>
                        </div>
                        <div>
                            <label htmlFor="tuningHz">Tuning:</label>
                            <input type="number" name="tuningHz" value={newMuse.tuningHz} placeholder="in Hz"/>
                        </div>
                        <button type="submit">Carry a Muse</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default MuseCreate;