import React, { Component } from 'react';

class NoteValueSelector extends Component {

    handleNoteValueChange = () => {
        this.props.noteValueChange()
    }
    render() {
        const noteValue = this.props.noteValue
        return (
            <div>
                <button onClick={this.handleNoteValueChange}>note: {noteValue === 1 ? "Quarter" : noteValue === 2 ? "Half" : noteValue === 3 ? "Eigth" : "Whole"}</button>
            </div>
        );
    }
}

export default NoteValueSelector;