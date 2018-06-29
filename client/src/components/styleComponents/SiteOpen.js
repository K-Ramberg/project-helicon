import React, { Component } from 'react';
import styled from 'styled-components'


const SiteOpen = styled.div`
  font-family: 'Kalam', cursive;
  font-weight: 100;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  @media(min-width: 730px){
    background-color: rgba(0,0,0,0.5);
  }
  h1 {
    color: rgba(230,230,230,0.9);
    margin: 0 auto;
    text-align: center;
    font-size: 6vh
  }
  h4 {
    color: rgba(230,230,230,0.9);
    margin: 0 auto;
    text-align: center;
    font-size: 2.5vh 
  }
  div {
      color: rgba(230,230,230,0.9);
      font-size: 4vh;
      text-align: center;
      margin: 4vh auto;
  }
  p {
    color: rgba(230,230,230,0.9);
      font-size: 2vh;
      text-align: center;
      margin: 4vh auto; 
  }
`

export default SiteOpen;