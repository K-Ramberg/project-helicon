import styled from 'styled-components'

const ComposePage = styled.div`
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    background-color: rgba(235, 212, 176, 1.0);
    h1 {
        font-family: 'Homemade Apple', cursive;
        margin:0 auto;
        padding: 2vh 4vw;
    }
    a {
        font-style: italic;
        margin: 0;
        color: rgba(230,216,207,2.0);
        font-size: 2vh;
        text-decoration: none;
        font-family: 'Kalam', cursive;
        background-color: rgba(30,16,7,0.3);
        border: 1vw solid rgba(0,0,0,0.0);
        border-radius: 5vw;
        :hover{
            background-color: rgba(30,16,7,0.4);
            }
        }
`
export default ComposePage;