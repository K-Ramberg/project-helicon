import React, { Component } from 'react';
import styled from 'styled-components'

const LineNoteHolder = styled.div`
    border-bottom: 0.4vh solid black;
    height: 0.39vh;
    width: 30px;
    background: rgba(0,0,0,0.0);
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