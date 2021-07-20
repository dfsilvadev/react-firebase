import styled from "styled-components";

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 370px;
  padding: 1rem;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  p {
    color: var(--text);
    font-size: var(--ft-14);
    span {
      color: var(--title);
      text-decoration: underline;
      transition: color 0.2s ease;
      cursor: pointer;

      &:hover {
        color: var(--pink);
      }
    }
  }
`;

export const Title = styled.h1`
  color: var(--title);
  font-size: var(--ft-24);
  position: relative;
  z-index: 5;

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    background: var(--pink);
    position: absolute;
    border-radius: 3px;
    left: -4px;
    bottom: 0;
    z-index: -1;
  }
`;
