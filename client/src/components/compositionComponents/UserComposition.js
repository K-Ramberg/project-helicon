import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import NotePlaceHolder from './noteSetUp/NotePlaceHolder';
import LineNotePlaceHolder from './noteSetUp/LineNotePlaceHolder';
import NoteValueSelector from './noteSetUp/NoteValueSelector';

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
    z-index: -2;
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
    z-index: 3;
`

const WholeNotePlace = styled.div`
    border: 5px solid black;
    background: none;
    border-radius: 100% 100% 100% 100%;
    width: 35px;
    height: 3vh;
    float:left;
    z-index: 4;
    margin-right: 160px;
`
const LineWholeNotePlace = styled.div`
    border: 5px solid black;
    background: none;
    border-radius: 100% 100% 100% 100%;
    width: 35px;
    height: 3vh;
    float: left;
    margin-top: -2vh;
    margin-left: 1vw;
    margin-right: 1vw;
    z-index: 1;
    margin-right: 160px;
`

const QuarterFlagStaff = styled.div`
    border-right: 3px solid black;
    height: 10vh; 
    margin-top: -8vh;   
    margin-left: -4px;
    float: left;
    z-index: -2;
    margin-right: 40px;
`

const LineQuarterFlagStaff = styled.div`
    border-right: 3px solid black;
    height: 10vh; 
    margin-top: -10vh;   
    margin-left: -7px;
    float: left;
    z-index: 3;
    margin-right: 40px;
`
const HalfNotePlace = styled.div`
    border: 2px solid black;
    background: white;
    border-radius: 100% 70% 100% 70%;
    width: 20px;
    height: 3.7vh;
    float:left;
    z-index: -2;
`

const LineHalfNotePlace = styled.div`
    border: 2px solid black;
    background: white;
    border-radius: 100% 70% 100% 70%;
    width: 20px;
    height: 3.7vh;
    float:left;
    margin-top: -1.9vh;
    z-index: -2;
`
const HalfFlagStaff = styled.div`
    border-right: 3px solid black;
    height: 10vh; 
    margin-top: -8vh;   
    margin-left: -4px;
    float: left;
    z-index: -2;
    margin-right: 80px;
`

const LineHalfFlagStaff = styled.div`
    border-right: 3px solid black;
    height: 10vh; 
    margin-top: -10vh;   
    margin-left: -7px;
    float: left;
    z-index: 3;
    margin-right: 80px;
`

const EigthNotePlace = styled.div`
    border: 2px solid black;
    background: black;
    border-radius: 100% 70% 100% 70%;
    width: 20px;
    height: 3.7vh;
    float:left;
    z-index: -2;
`

const LineEigthNotePlace = styled.div`
    border: 2px solid black;
    background: black;
    border-radius: 100% 70% 100% 70%;
    width: 20px;
    height: 3.7vh;
    float:left;
    margin-top: -1.9vh;
    z-index: -2;
`
const EigthFlagStaff = styled.div`
    border-right: 3px solid rgba(0,0,0,0);
    border-top: 4px solid black;
    border-width: 20px;
    border-left: 3px solid black;
    height: 8vh; 
    margin-top: -8vh;   
    margin-left: -4px;
    float: left;
    z-index: -2;
    margin-right: 5px;
`

const LineEigthFlagStaff = styled.div`
     border-right: 3px solid rgba(0,0,0,0);
    border-top: 4px solid black;
    border-width: 20px;
    border-left: 3px solid black;
    height: 8vh; 
    margin-top: -10vh;   
    margin-left: -7px;
    float: left;
    z-index: 3;
    margin-right: 5px;
`

const NoteSpaceFormer = styled.div`
    float: left;
    margin-top: 10vh;
`
const PreDiv = styled.div`
    min-width: 3vw;
    background: rgba(3,3,3,0.1);
`

class UserComposition extends Component {

    state = {
        user: {},
        muse: {},
        comp: {
            notePlaces: []
        },
        beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        noteValue: 1
    }

    cancelChange = () => {
        const userId = this.props.match.params.userId
        const museId = this.props.match.params.museId
        const compId = this.props.match.params.compId
        axios.get(`/api/users/${userId}/muses/${museId}/comps/${compId}`).then((res) => {
            this.setState({
                user: res.data.user,
                muse: res.data.muse,
                comp: res.data.comp
            })
        })
    }

    componentDidMount() {
        this.cancelChange()
    }

    changeComponentState = (event, index) => {
        const newSpace = [...this.state.beatSpaces]
        if (this.state.noteValue === 1) {
            newSpace[index] = 1
        }
        else if (this.state.noteValue === 2) {
            newSpace[index] = 2
        }
        else if (this.state.noteValue === 3) {
            newSpace[index] = 3
        }
        else if (this.state.noteValue === 4) {
            newSpace[index] = 4
        }
        const compName = this.state.comp.name
        const newCompArray = [...this.state.comp.notePlaces]
        newCompArray.push(newSpace)
        this.setState({
            comp: {
                name: compName,
                notePlaces: newCompArray
            }
        })
    }

    existingNoteStateChange = (event, keyVal, compVal) => {
        const newCompArray = [...this.state.comp.notePlaces]
        const compName = this.state.comp.name
        if (this.state.noteValue === 1) {
            newCompArray[compVal][keyVal] === 1 ?
                newCompArray[compVal][keyVal] = 0 :
                newCompArray[compVal][keyVal] = 1
        }
        else if (this.state.noteValue === 2) {
            newCompArray[compVal][keyVal] === 2 ?
                newCompArray[compVal][keyVal] = 0 :
                newCompArray[compVal][keyVal] = 2
        }
        else if (this.state.noteValue === 3) {
            newCompArray[compVal][keyVal] === 3 ?
                newCompArray[compVal][keyVal] = 0 :
                newCompArray[compVal][keyVal] = 3
        }
        else if (this.state.noteValue === 4) {
            newCompArray[compVal][keyVal] === 4 ?
                newCompArray[compVal][keyVal] = 0 :
                newCompArray[compVal][keyVal] = 4
        }
        this.setState({
            comp: {
                name: compName,
                notePlaces: newCompArray
            }
        })
    }

    noteValueChange = (event) => {
        switch (this.state.noteValue) {
            case 1:
                this.setState({
                    noteValue: 2
                })
                break;
            case 2:
                this.setState({
                    noteValue: 3
                })
                break;
            case 3:
                this.setState({
                    noteValue: 4
                })
                break;
            case 4:
                this.setState({
                    noteValue: 1
                })
        }
    }

    submitNotesChange = (event) => {
        const userId = this.props.match.params.userId
        const museId = this.props.match.params.museId
        const compId = this.props.match.params.compId
        axios.patch(`/api/users/${userId}/muses/${museId}/comps/${compId}`, this.state.comp).then((res) => {
            console.log(res.data)
        })
    }

    render() {
        const comp = this.state.comp
        const user = this.state.user
        const muse = this.state.muse
        return (
            <div>
                <h1>{this.state.user.name}'s {comp.name}</h1>
                <div>
                    <button onClick={this.submitNotesChange}>Commit Change</button>
                </div>
                <div>
                    <button onClick={this.cancelChange}>Cancel</button>
                </div>
                <div>
                    {comp.notePlaces.map((each, i) => {
                        return (
                            <NoteSpaceFormer key={i}>
                                {each.map((reach, index) => {
                                    const keyVal = index
                                    const compVal = i
                                    return (
                                        <div key={index} onClick={(event) => this.existingNoteStateChange(event, keyVal, compVal)}>
                                            {index % 2 === 0 ? <BelowStaff>{reach === 1 ? <div><NotePlace></NotePlace><QuarterFlagStaff></QuarterFlagStaff></div>
                                                : reach === 2 ? <div><HalfNotePlace></HalfNotePlace><HalfFlagStaff></HalfFlagStaff></div> 
                                                : reach === 3 ? <div><EigthNotePlace></EigthNotePlace><EigthFlagStaff></EigthFlagStaff></div>
                                                : reach == 4 ? <div><WholeNotePlace></WholeNotePlace></div> : null}</BelowStaff>
                                                : <StaffLine>{reach === 1 ? <div><LineNotePlace></LineNotePlace><LineQuarterFlagStaff></LineQuarterFlagStaff></div> 
                                                : reach === 2 ? <div><LineHalfNotePlace></LineHalfNotePlace><LineHalfFlagStaff></LineHalfFlagStaff></div> 
                                                : reach === 3 ? <div><LineEigthNotePlace></LineEigthNotePlace><LineEigthFlagStaff></LineEigthFlagStaff></div>
                                                : reach === 4 ? <div><LineWholeNotePlace></LineWholeNotePlace></div>: null}</StaffLine>}
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
                        <NoteValueSelector noteValue={this.state.noteValue} noteValueChange={this.noteValueChange}></NoteValueSelector>
                    </NoteSpaceFormer>
                </div>
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}`}>Go back</Link>
                </div>
            </div>
        );
    }
}

export default UserComposition;