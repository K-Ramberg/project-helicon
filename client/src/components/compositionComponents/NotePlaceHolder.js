import React, { Component } from 'react';
import styled from 'styled-components'

const NoteHolder = styled.div`
    height: 2vh;
    width: 20px;
    background: rgba(0,0,255,0.6);
`

class NotePlaceHolder extends Component {

    handleClick = (event) => {
        this.props.changeComponentState(event)
    }

    render() {
        return (
            <NoteHolder onClick={(event) => this.handleClick(event)}></NoteHolder>
        );
    }
}

export default NotePlaceHolder;