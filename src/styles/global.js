import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #ececec;
    --text: #3f3f40;
    --text-highlight: #c5c5c5;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #33cc95;
    --blue: #5965e0;
    --yellow: #f0bc5e;

    --ft-14: 0.875rem;
    --ft-16: 1rem;
    --ft-18: 1.125rem;
    --ft-24: 1.5rem;
    --ft-28: 1.75rem;
    --ft-64: 4rem;
    --ft-73: 4.5625rem;
    --ft-120: 7.5rem;

    --px-10: 0.625rem;
    --px-16: 1rem;
    --px-20: 1.25rem;
    --px-40: 2.5rem;
    --px-60: 3.75rem;
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
    font-family: "Barlow Condensed", sans-serif;
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
    display: flex;
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
  /* @media (min-width: 576px) {
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
  }*/
  @media (min-width: 1200px) {
    .container {
      padding: 0;
      flex-direction: row;
      > div {
        flex: 1
      }
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
