import React, { Component } from 'react';
import styled from 'styled-components'

const LineNoteHolder = styled.div`
    height: 2vh;
    width: 20px;
    background: rgba(0,255,0,0.5);
    float: left;
    margin-top: -1.5vh;
`

class LineNotePlaceHolder extends Component {

    handleClick = (event) => {
        this.props.changeComponentState(event, this.props.indexProp)
    }

    render() {
        return (
            <LineNoteHolder onClick={(event) => this.handleClick(event)}></LineNoteHolder>
        );
    }
}

export default LineNotePlaceHolder;