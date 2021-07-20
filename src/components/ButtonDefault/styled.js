import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 2.8125rem;
  border: none;
  outline: 0;
  background: var(--pink);
  color: var(--white);
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;
