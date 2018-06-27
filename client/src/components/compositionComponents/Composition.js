import React, { Component } from 'react';
import styled from 'styled-components'
import NotePlaceHolder from './NotePlaceHolder';
import LineNotePlaceHolder from './LineNotePlaceHolder';

const StaffLine = styled.div`
    border-top: 0.5vh solid black;
    background: yellow;
`
const AboveStaff = styled.div`
    background: rgba(40,0,0,0.2);
    height: 2vh;
`
const BelowStaff = styled.div`
    background: rgba(60,0,0,0.3);
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
const NoteSpace = styled.div`
    float: left;
`

class Composition extends Component {

    state = {
        comp: [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0]
        ],
        beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    render() {
        const beatSpaces = this.state.beatSpaces
        return (
            <div>
                <h1>comp here</h1>
                <div>
                    {this.state.comp.map((each) => {
                        return (
                            <NoteSpace>
                                {each.map((reach) => {
                                    return (
                                        <div>
                                            {reach}
                                        </div>
                                    )
                                })}
                            </NoteSpace>
                        )
                    })}
                    <NoteSpace>
                        woot
                    </NoteSpace>
                </div>
            </div>
        );
    }
}

export default Composition;