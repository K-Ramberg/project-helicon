import React, { Component } from 'react';
import styled from 'styled-components'

const NoteHolder = styled.div`
    height: 3.6vh;
    width: 30px;
    background: rgba(0,0,0,0.0);
    border-right: 4px solid black;
`

class NotePlaceHolder extends Component {

    handleClick = (event) => {
        this.props.changeComponentState(event, this.props.indexProp)
    }

    render() {
        return (
            <NoteHolder onClick={(event) => this.handleClick(event)}></NoteHolder>
        );
    }
}

export default NotePlaceHolder;