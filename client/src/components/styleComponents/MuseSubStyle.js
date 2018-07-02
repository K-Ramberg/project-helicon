import styled from 'styled-components'

const MuseSubStyle = styled.div`
    margin: 0 auto;
    a {
        font-size: 2vh;
        color: rgba(250,220,220,0.8);
        font-style: italic;
    }
    button {
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
        textarea {
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
        div {
            margin: 0vh 0vh;
        }
        h1 {
            margin-bottom: 1vh;
        }
        form {
            margin-top: 0;
        }
`
export default MuseSubStyle;