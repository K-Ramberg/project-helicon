import React, { Component } from 'react';
import styled from 'styled-components'
import NotePlaceHolder from './noteSetUp/NotePlaceHolder';
import LineNotePlaceHolder from './noteSetUp/LineNotePlaceHolder';
import NoteValueSelector from './noteSetUp/NoteValueSelector';
import ComposePage from '../styleComponents/ComposePage';
import { Link } from 'react-router-dom'
import FormStyle from '../styleComponents/FormStyle';
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
import PreDiv from '../styleComponents/composePageNoteStyles/PreDiv'

class FreeComposition extends Component {

    state = {
        comp: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        noteValue: 1
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
        const newCompArray = [...this.state.comp]
        newCompArray.push(newSpace)
        this.setState({
            comp: newCompArray
        })
    }

    existingNoteStateChange = (event, keyVal, compVal) => {
        const newCompArray = [...this.state.comp]
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
            comp: newCompArray
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

    clearStaff = () => {
        this.setState({
            comp: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            beatSpaces: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        })
    }

    render() {
        return (
            <CompositionWrapper>
                <ComposePage>
                    <h1>Free Compose</h1>
                    <FormStyle>
                        <button onClick={this.clearStaff}>Clear</button>
                        <Link to={`/`}>Go back</Link>
                    </FormStyle>
                </ComposePage>
                <NoteSpaceFormer>{this.state.beatSpaces.map((each, i) => {
                    return (<PreDiv key={i}>{i % 2 === 0 ? <BelowStaff></BelowStaff> : <StaffLine></StaffLine>}</PreDiv>)
                })}</NoteSpaceFormer>
                <div>
                    {this.state.comp.map((each, i) => {
                        return (
                            <ComposePage>
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
                            </ComposePage>
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

export default FreeComposition;