import React, { Component } from 'react';
import styled from 'styled-components'

const LineNoteHolder = styled.div`
    border-bottom: 0.4vh solid black;
    height: 0.39vh;
    width: 30px;
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    background-color: rgba(235, 212, 176, 1.0);
    border-right: 4px solid black;
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