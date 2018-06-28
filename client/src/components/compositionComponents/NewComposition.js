import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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

class NewComposition extends Component {

    state = {
        user: {},
        muse: {},
        comp: {
            name: '',
            notePlaces: []
        },
        beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    cancelChange = () => {
        this.setState({
            comp:{
                name: '',
                notePlaces: []
            }
        })
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        const museId = this.props.match.params.museId
        axios.get(`/api/users/${userId}/muses/${museId}`).then((res) => {
            this.setState({
                user: res.data.user,
                muse: res.data.muse
            })
        })
    }

    changeComponentState = (event, index) => {
        const newSpace = [...this.state.beatSpaces]
        newSpace[index] = 1
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
        newCompArray[compVal][keyVal] === 1 ?
            newCompArray[compVal][keyVal] = 0 :
            newCompArray[compVal][keyVal] = 1
        this.setState({
            comp: {
                name: compName,
                notePlaces: newCompArray
            }
        })
    }

    handleNameChange = (event) => {
        const keyNameValueOfInput = event.target.name
        const userInput = event.target.value
        const cloneState = { ...this.state }
        cloneState.comp.name = userInput
        this.setState(cloneState) 
    }

    submitNewComp = (event) => {
        const userId = this.props.match.params.userId
        const museId = this.props.match.params.museId
        axios.post(`/api/users/${userId}/muses/${museId}/comps/`, this.state.comp).then((res) => {
            this.props.history.push(`/users/${userId}/muses/${museId}`)
        })
    }

    render() {
        const comp = this.state.comp
        const user = this.state.user
        const muse = this.state.muse
        return (
            <div>
                <h1>{this.state.user.name}'s new Compostion</h1>
                <div>
                    <input type="text" name="name" value={comp.name} placeholder="name" onChange={this.handleNameChange}/>
                    <button onClick={this.submitNewComp}>Add Compostion</button>
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
                                            {index % 2 === 0 ? <BelowStaff>{reach === 1 ? <NotePlace></NotePlace> : null}</BelowStaff> : <StaffLine>{reach === 1 ? <LineNotePlace></LineNotePlace> : null}</StaffLine>}
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
                <div>
                    <Link to={`/users/${user._id}/muses/${muse._id}`}>Go back</Link>
                </div>
            </div>
        );
    }
}

export default NewComposition;