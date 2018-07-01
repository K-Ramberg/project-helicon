import React, { Component } from 'react';
import styled from 'styled-components'


const SiteOpen = styled.div`
  font-family: 'Kalam', cursive;
  font-weight: 100;
  height: 100vh;
  width: 100%;
  color: rgba(230,216,207,9.0);
  background-color: rgba(0,0,0,0.6);
  @media(min-width: 730px){
    background-color: rgba(0,0,0,0.5);
  }
  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 6vh
  }
  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 2.5vh 
  }
  div {
      font-size: 4vh;
      text-align: center;
      margin: 4vh auto;
  }
  p {
      font-size: 2vh;
      text-align: center;
      margin: 4vh auto; 
  }
`

export default SiteOpen;