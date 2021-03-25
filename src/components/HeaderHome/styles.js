import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10rem;
  background: var(--white);
  padding: 0.875rem;
  border-radius: 3px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  .title {
    h1 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1.25rem;
      font-weight: 400;
    }
    p {
      line-height: 1rem;
    }
  }

  @media (min-width: 375px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    height: auto;
    .title,
    .wrap-image {
      width: 100%;
    }
  }
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title,
    .wrap-image {
      width: 45%;
    }
  }
`;
