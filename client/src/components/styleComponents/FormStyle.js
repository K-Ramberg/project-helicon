import styled from 'styled-components'

const FormStyle = styled.div`
    margin: 0 auto;
    form {
        margin-left: -5vw;
        button {
        margin: 2vh;
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
    }
    label {
        margin: 0 10vw 0 10vw;
        font-size: 3.2vh;
        text-align: center;
        max-width: 80vw;
    }
    input {
        border: 1vw solid rgba(0,0,0,0.0);
        border-radius: 5vw;
        margin: 0 auto;
        display: block;
        font-size: 2vh;
        font-family: 'Kalam', cursive;
        text-align: center;
        color: rgba(230,216,207,9.0);
        width: 80vw;
        background-color: rgba(0,0,0,0.3);
        @media(min-width: 730px){
        background-color: rgba(0,0,0,0.5);
        }
    }
    button {
        margin: 5vh;
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
    div {
        margin: 0;
    }
`
export default FormStyle;