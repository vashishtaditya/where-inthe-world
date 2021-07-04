import {createGlobalStyle} from 'styled-components'

export const light = {
    background: 'hsl(0, 0%, 98%)',
    element: 'hsl(0, 0%, 100%)',
    font: 'hsl(200, 15%, 8%)',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
}

export const dark = {
    background: 'hsl(207, 26%, 17%)',
    element: 'hsl(209, 23%, 22%)',
    font: 'hsl(0, 0%, 100%)',
    boxShadow: 'none'
}

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

* {
    margin: 0;
    padding: 0;
  }
  
body{
    background: ${props => props.theme.background};
    font-family: 'Nunito Sans', sans-serif;
}`