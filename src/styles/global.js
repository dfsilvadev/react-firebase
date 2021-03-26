import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #33cc95;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
    --pink: #ea4c89;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  html { 
    @media (max-width:1080px) {
      font-size: 93.75%
    }
    @media (max-width:1080px) {
      font-size: 87.5%
    }
  }
  body {
    font-family: "Poppins", sans-serif;
    color: var(--text);
    background-color: var(--background);
    overflow-x: hidden;
  }
  input, 
  textarea, 
  button {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 300;
  }
  ol,
  ul {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: inherit;
    color: var(--title);
  }
  span {
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a,
  p {
    font: 300 0.875rem "Poppins", sans-serif;
  }
  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* CLASSES GERAIS */
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    background: #232323 !important;
  }
  ::-webkit-scrollbar-thumb {
    background: #232323 !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #28f5be !important;
  }

`;
