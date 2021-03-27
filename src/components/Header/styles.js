import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--px-20);

  nav ul,
  .temperature ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
  nav ul {
    li {
      text-align: center;
      a {
        display: block;
        color: var(--text-highlight);
        padding: 3px var(--px-20);
        font-size: var(--ft-24);
        transition: all 0.2s ease;
        &:hover,
        &.active {
          border-bottom: 2px solid var(--text);
          color: var(--text);
        }
      }
    }
  }
  .temperature ul {
    li {
      width: 40px;
      height: 40px;
      background: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:first-child,
      &:hover {
        background: var(--text);
        color: var(--white);
      }
    }
  }
`;
