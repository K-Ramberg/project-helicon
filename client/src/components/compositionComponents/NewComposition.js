import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NotePlaceHolder from './noteSetUp/NotePlaceHolder';
import LineNotePlaceHolder from './noteSetUp/LineNotePlaceHolder';
import NoteValueSelector from './noteSetUp/NoteValueSelector';
import ComposePage from '../styleComponents/ComposePage';
import FormStyle from '../styleComponents/FormStyle';
import MuseSubStyle from '../styleComponents/MuseSubStyle';
import CompositionWrapper from '../styleComponents/CompositionWrapper';
import StaffLine from '../styleComponents/composePageNoteStyles/StaffLine'
import BelowStaff from '../styleComponents/composePageNoteStyles/BelowStaff'
import NotePlace from '../styleComponents/composePageNoteStyles/NotePlace'
import LineNotePlace from '../styleComponents/composePageNoteStyles/LineNotePlace'
import WholeNotePlace from '../styleComponents/composePageNoteStyles/WholeNotePlace'
import LineWholeNotePlace from '../styleComponents/composePageNoteStyles/LineWholeNotePlace'
import QuarterFlagStaff from '../styleComponents/composePageNoteStyles/QuarterFlagStaff'
import LineQuarterFlagStaff from '../styleComponents/composePageNoteStyles/LineQuarterFlagStaff'
import HalfNotePlace from '../styleComponents/composePageNoteStyles/HalfNotePlace'
import LineHalfNotePlace from '../styleComponents/composePageNoteStyles/LineHalfNotePlace'
import HalfFlagStaff from '../styleComponents/composePageNoteStyles/HalfFlagStaff'
import LineHalfFlagStaff from '../styleComponents/composePageNoteStyles/HalfFlagStaff'
import EigthNotePlace from '../styleComponents/composePageNoteStyles/EigthNotePlace'
import LineEigthNotePlace from '../styleComponents/composePageNoteStyles/LineEigthNotePlace'
import EigthFlagStaff from '../styleComponents/composePageNoteStyles/EigthFlagStaff'
import LineEigthFlagStaff from '../styleComponents/composePageNoteStyles/LineEigthFlagStaff'
import NoteSpaceFormer from '../styleComponents/composePageNoteStyles/NoteSpaceFormer'

class NewComposition extends Component {

    state = {
        user: {},
        muse: {},
        comp: {
            name: '',
            notePlaces: []
        },
        beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        noteValue: 1
    }

    cancelChange = () => {
        this.setState({
            comp: {
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
            <CompositionWrapper>
                <ComposePage>
                    <h1>{this.state.user.name}'s new Compostion</h1>
                    <FormStyle>
                        <MuseSubStyle>
                            <input type="text" name="name" value={comp.name} placeholder="name" onChange={this.handleNameChange} />
                            <button onClick={this.submitNewComp}>Add Compostion</button>
                            <button onClick={this.cancelChange}>Cancel</button>
                            <Link to={`/users/${user._id}/muses/${muse._id}`}>Go back</Link>
                        </MuseSubStyle>
                    </FormStyle>
                </ComposePage>
                <div>
                    {comp.notePlaces.map((each, i) => {
                        return (
                            <NoteSpaceFormer key={i}>
                                {each.map((reach, index) => {
                                    const keyVal = index
                                    const compVal = i
                                    return (
                                        <ComposePage key={index} onClick={(event) => this.existingNoteStateChange(event, keyVal, compVal)}>
                                            {index % 2 === 0 ? <BelowStaff>{reach === 1 ? <div><NotePlace></NotePlace><QuarterFlagStaff></QuarterFlagStaff></div>
                                                : reach === 2 ? <div><HalfNotePlace></HalfNotePlace><HalfFlagStaff></HalfFlagStaff></div>
                                                    : reach === 3 ? <div><EigthNotePlace></EigthNotePlace><EigthFlagStaff></EigthFlagStaff></div>
                                                        : reach == 4 ? <div><WholeNotePlace></WholeNotePlace></div> : null}</BelowStaff>
                                                : <StaffLine>{reach === 1 ? <div><LineNotePlace></LineNotePlace><LineQuarterFlagStaff></LineQuarterFlagStaff></div>
                                                    : reach === 2 ? <div><LineHalfNotePlace></LineHalfNotePlace><LineHalfFlagStaff></LineHalfFlagStaff></div>
                                                        : reach === 3 ? <div><LineEigthNotePlace></LineEigthNotePlace><LineEigthFlagStaff></LineEigthFlagStaff></div>
                                                            : reach === 4 ? <div><LineWholeNotePlace></LineWholeNotePlace></div> : null}</StaffLine>}
                                        </ComposePage>
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
                        <FormStyle>
                            <NoteValueSelector noteValue={this.state.noteValue} noteValueChange={this.noteValueChange}></NoteValueSelector>
                        </FormStyle>
                    </NoteSpaceFormer>
                </div>
            </CompositionWrapper>
        );
    }
}

export default NewComposition;