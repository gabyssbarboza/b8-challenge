import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #E5E5E5;

    --red: #DA4B4F;
    --redStrong: #C22539;

    --grey: #F2F3F6;

    --text: #1C1C1C;
    --subtext:  #B5B5B6;

    --green: #40B25C;
    --greenHover: #1C6C3E;
    --greenActive: #A3F9B9;

    --white: #ffffff;
    --black: #000000;

    
    --heartBgHover:  #FEE5EC;



}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720px){
        font-size: 87.5%;
    }
}


body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
}


body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}





`;
