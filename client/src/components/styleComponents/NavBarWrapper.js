import React, { Component } from 'react';
import styled from 'styled-components'


const NavBarWrapper = styled.div`
     position: fixed;
     top: 0;
  a {
    margin: 0 6vw;
    color: rgba(30,16,7,9.0);
    font-size: 5vw;
    line-height: 6.5vh;
    text-decoration: none;
    /* font-family: 'Homemade Apple', cursive; */
    /* font-family: 'Kalam', cursive;
    font-family: 'Handlee', cursive; */
    font-family: 'Parisienne', cursive;
  }
  width: 100%;
  height: 8vh;
  background-color: #a6884c;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
 
 @media(max-width: 500px){
     a {
         font-size: 1.5em;
         margin: 2vw;
     }
 }

 @media(min-width: 660px){
    a{
      font-size: 5vh;
      margin: 7vw;  
      }
 }
`


export default NavBarWrapper;