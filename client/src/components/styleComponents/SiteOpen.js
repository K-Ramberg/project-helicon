import React, { Component } from 'react';
import styled from 'styled-components'


const SiteOpen = styled.div`
  font-family: 'Kalam', cursive;
  font-weight: 100;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  @media(min-width: 730px){
    background-color: rgba(0,0,0,0.4);
  }
  div {
      color: rgba(230,230,230,0.9);
      font-size: 4vh;
      text-align: center;
      
  }
`

export default SiteOpen;