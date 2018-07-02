import styled from 'styled-components'

const NavBarWrapper = styled.div`
     position: fixed;
     top: 0;
  a {
    margin: 0 6vw;
    color: rgba(230,216,207,9.0);
    font-size: 5vw;
    line-height: 6.5vh;
    text-decoration: none;    
    font-family: 'Parisienne', cursive;
    background-color: rgba(30,16,7,0.1);
    border-radius: 40%;
    :hover{
      background-color: rgba(30,16,7,0.3);
  }
  }
  width: 100%;
  height: 8vh;
  background: linear-gradient(to bottom, rgba(5,5,5,0.8), rgba(5,5,5,0.7), rgba(5,5,5,0.5));
  /* background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png"); */
  border-radius: 0 0 5% 5%;
  :hover{
    background: linear-gradient(to bottom, rgba(200,200,200,0.2), rgba(255,255,255, 0.4));
  }
  
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