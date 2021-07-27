import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --background: #f2f3f5;

    --gray-line: #c5c5c5;
    --text: #717171;
    --title: #2e384d;
    --red: #e83f5b;
    --pink: #fd6699;
    --green: #00ff5e;
    --blue: #5965e0;
    --yellow: #f0bc5e;

    --ft-10: 0.625rem;
    --ft-14: 0.875rem;
    --ft-16: 1rem;
    --ft-18: 1.125rem;
    --ft-24: 1.5rem;
    --ft-28: 1.75rem;
    --ft-64: 4rem;
    --ft-73: 4.5625rem;
    --ft-120: 7.5rem;

    --px-10: 0.625rem;
    --px-14: 0.875rem;
    --px-16: 1rem;
    --px-20: 1.25rem;
    --px-40: 2.5rem;
    --px-45: 2.8125rem;
    --px-60: 3.75rem;
    --px-80: 5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    font-family: "Roboto", sans-serif;
    background-color: var(--background);
    overflow-x: hidden;
  }
  input, 
  textarea, 
  button,
  label {
    font-family: "Roboto Mono", sans-serif;
    font-weight: 400;
    font-size: var(--ft-14)
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
      max-width: 1160px
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

  .spinner-content {
    width: 100%;
    height: 100vh;
    border: 1px solid #000;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
