

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 530px;
  margin: 0;
  font-family: "Inter";
  background-color: ${ probs  => probs.theme.colors.bgc}; 
  color:  ${ probs  => probs.theme.colors.textColor};
}

button, 
input {
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color:  ${ probs  => probs.theme.colors.darkPrime};
  }
}

._no-select {
  -webkit-touch-callout: none; //? iOS Safari
  -webkit-user-select: none; //? Safari
  -khtml-user-select: none; //? Konqueror HTML
  -moz-user-select: none; //? Old versions of Firefox
  -ms-user-select: none; //? Internet Explorer/Edge
  user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
}


  &:disabled {
    background-color:  ${ probs  => probs.theme.colors.disabledBgc};
  }

  &.primary {
    background-color:  ${ probs  => probs.theme.colors.primeColor};
    color: white;
  }

  &.secondary {
    background-color:  ${ probs  => probs.theme.colors.lightGray};
    color:  ${ probs  => probs.theme.colors.placeholderColor};
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }


input {
  padding: 12px 15px;
  background-color:  ${ probs  => probs.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color:  ${ probs  => probs.theme.colors.primeColor};
  }
}

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}`;