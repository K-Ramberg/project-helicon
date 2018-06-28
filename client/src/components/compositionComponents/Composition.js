import React, { Component } from 'react';
import styled from 'styled-components'
import NotePlaceHolder from './NotePlaceHolder';
import LineNotePlaceHolder from './LineNotePlaceHolder';

const StaffLine = styled.div`
    border-top: 0.39vh solid black;
    background: none;
`
const BelowStaff = styled.div`
    background: rgba(0,0,0,0.0);
    height: 4vh;
`
const NotePlace = styled.div`
    border: 1px solid black;
    background: black;
    border-radius: 100% 70% 100% 70%;
    width: 20px;
    height: 3.7vh;
    float:left;
`
const LineNotePlace = styled.div`
    border: 1px solid black;
    background: black;
    border-radius: 100% 70% 100% 70%;
    width: 20px;
    height: 3.5vh;
    float: left;
    margin-top: -1.9vh;
    margin-left: 1vw;
    margin-right: 1vw;
`
const NoteSpaceFormer = styled.div`
    float: left;
`

class Composition extends Component {

    state = {
        comp: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    changeComponentState = (event, index) => {
        const newSpace = [...this.state.beatSpaces]
        newSpace[index]= 1
        const newCompArray = [...this.state.comp]
        newCompArray.push(newSpace)
        this.setState({
            comp: newCompArray
        })
    }

    existingNoteStateChange = (event, keyVal, compVal) => {
        const newCompArray = [...this.state.comp]
        newCompArray[compVal][keyVal] === 1 ?
            newCompArray[compVal][keyVal] = 0:
            newCompArray[compVal][keyVal] = 1
        this.setState({
            comp: newCompArray
        })
    }

    render() {
        return (
            <div>
                <h1>Free Compose</h1>
                <div>
                    {this.state.comp.map((each, i) => {
                        return (
                            <NoteSpaceFormer key={i}>
                                {each.map((reach, index) => {
                                    const keyVal = index
                                    const compVal = i
                                    return (
                                        <div key={index} onClick={(event) => this.existingNoteStateChange(event, keyVal, compVal)}>
                                            {index%2 === 0? <BelowStaff>{reach === 1? <NotePlace></NotePlace>:null}</BelowStaff>: <StaffLine>{reach === 1? <LineNotePlace></LineNotePlace>:null}</StaffLine>}
                                        </div>
                                    )
                                })}
                            </NoteSpaceFormer>
                        )
                    })}
                    <NoteSpaceFormer>
                        <NotePlaceHolder indexProp={0} changeComponentState={this.changeComponentState}></NotePlaceHolder>
                        <LineNotePlaceHolder indexProp={1} changeComponentState={this.changeComponentState}></LineNotePlaceHolder>
                        <NotePlaceHolder indexProp={2} changeComponentState={this.changeComponentState}></NotePlaceHolder>
                        <LineNotePlaceHolder indexProp={3} changeComponentState={this.changeComponentState}></LineNotePlaceHolder>
                        <NotePlaceHolder indexProp={4} changeComponentState={this.changeComponentState}></NotePlaceHolder>
                        <LineNotePlaceHolder indexProp={5} changeComponentState={this.changeComponentState}></LineNotePlaceHolder>
                        <NotePlaceHolder indexProp={6} changeComponentState={this.changeComponentState}></NotePlaceHolder>
                        <LineNotePlaceHolder indexProp={7} changeComponentState={this.changeComponentState}></LineNotePlaceHolder>
                        <NotePlaceHolder indexProp={8} changeComponentState={this.changeComponentState}></NotePlaceHolder>
                        <LineNotePlaceHolder indexProp={9} changeComponentState={this.changeComponentState}></LineNotePlaceHolder>
                        <NotePlaceHolder indexProp={10} changeComponentState={this.changeComponentState}></NotePlaceHolder>
                    </NoteSpaceFormer>
                </div>
            </div>
        );
    }
}

export default Composition;