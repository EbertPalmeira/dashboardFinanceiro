import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    box-sizing: border-box;
    margin: 0;
    background-color: #E6E6FA;
}


.react-modal-overlay{
    background: rgb(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0 ;

    display:flex;
    align-items:center;
    justify-content:center ;
}

.react-modal-content{
   width:100%;
   height: 50%;
   max-width:406px;
   background: #fff;
   padding:3rem;
   position:relative;
   border-radius:0.25rem ;
}
.react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;
    transition: filter 0.2s ;
        &:hover{
            filter:brightness(0.8)
    }
}



`