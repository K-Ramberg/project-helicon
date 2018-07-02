import styled from 'styled-components'

const SiteOpen = styled.div`
  font-family: 'Kalam', cursive;
  font-weight: 100;
  height: 100vh;
  width: 100%;
  color: rgba(230,216,207,0.9);
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
  h3 {
    margin-left: 10vw;
    font-size: 4vh;
    color: rgba(230,230,240,0.9)
  }
  h5 {
    display: inline;
    color: rgba(230,240,230,0.9);
    font-style: italic;
  }
  h6 {
    display: inline;
    font-size: 2.5vh;
    text-align: left;
    margin-right: 3vw;
  }
  div {
      font-size: 4vh;
      text-align: center;
      margin: 2vh auto;
  }
  p {
      font-size: 2vh;
      text-align: center;
      margin: 0 auto; 
  }
  a {
    margin: 0 6vw;
    color: rgba(230,216,207,0.9);
    font-size: 3vh;
    line-height: 6.5vh;
    text-decoration: none;
    font-family: 'Kalam', cursive;
    background-color: rgba(0,0,0,0.25);
    border-radius: 40%;
    :hover{
      background-color: rgba(0,0,0,0.6);
  }
`

export default SiteOpen;