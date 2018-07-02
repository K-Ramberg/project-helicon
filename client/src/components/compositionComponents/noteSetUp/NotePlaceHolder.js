import React, { Component } from 'react';
import styled from 'styled-components'

const NoteHolder = styled.div`
    height: 3.6vh;
    width: 30px;
    border-right: 4px solid black;
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    background-color: rgba(235, 212, 176, 1.0);
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