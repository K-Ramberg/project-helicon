import React, { Component } from 'react';
import styled from 'styled-components'

const StaffLine = styled.div`
    border-top: 0.5vh solid black;
    background: yellow;
`
const AboveStaff = styled.div`
    background: blue;
    height: 2vh;
`
const BelowStaff = styled.div`
    background: red;
    height: 2vh;
`
const NotePlace = styled.div`
    border: 1px solid black;
    background: black;
    border-radius: 100%;
    width: 20px;
    height: 2vh;
    float:left;
`
const LineNotePlace = styled.div`
    border: 1px solid black;
    background: black;
    border-radius: 100%;
    width: 20px;
    height: 2vh;
    float: left;
    margin-top: -1.5vh;
`

class Composition extends Component {

    state = {
        stafflines: [1, 2, 3, 4, 5]
    }

    

    render() {
        return (
            <div>
                <h1>comp here</h1>
                <div>
                    <AboveStaff><NotePlace></NotePlace></AboveStaff>
                    {this.state.stafflines.map((each, i) => {
                        return (
                            <div key={i}>
                                <StaffLine><LineNotePlace></LineNotePlace></StaffLine>
                                <BelowStaff><NotePlace></NotePlace></BelowStaff>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Composition;