import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  height: 5rem;
  background: var(--white);
  display: flex;
  justify-content: space-between;

  .logo {
    background: var(--blue);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    flex: 1;
    max-width: 400px;
    display: flex;

    ul {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          padding: 0.5rem 2.5rem;
          font-size: 1.25rem;
          border-radius: 3px;
          transition: all 0.2s ease;
          &:hover,
          &.active {
            background: var(--blue);
            color: var(--white);
          }
        }
      }
    }
  }
`;
