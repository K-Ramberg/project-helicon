import React, { Component } from 'react';

class NoteValueSelector extends Component {

    handleNoteValueChange = () => {
        this.props.noteValueChange()
    }
    render() {
        return (
            <div>
                <button onClick={this.handleNoteValueChange}>note: {this.props.noteValue}</button>
            </div>
        );
    }
}

export default NoteValueSelector;