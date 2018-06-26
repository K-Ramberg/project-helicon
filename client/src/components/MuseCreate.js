import React, { Component } from 'react';

class MuseCreate extends Component {

    state = {
        user: {},
        newMuse: {
            name: '',
            description: '',
            keySignature: '',
            timeSignature: '',
            tempoBps: 60,
            tuningHz: 440
        }
    }

    

    render() {
        return (
            <div>
                making muses
            </div>
        );
    }
}

export default MuseCreate;