import styled from "styled-components";

export const WatherResumeContent = styled.aside`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 1rem 1.25rem;
  background: var(--white);
  border-radius: 1.25rem;

  .search {
    display: flex;
    margin-bottom: 1.25rem;

    input {
      flex: 1;
      border: 1px solid var(--gray-line);
      border-radius: 0.5rem 0 0 0.5rem;
      padding: 13px 15px;
      font-size: 1rem;
      &::placeholder {
        color: var(--text-highlight);
        font-weight: 600;
      }
    }
    > span {
      width: 48px;
      height: 48px;
      border-top: 1px solid var(--gray-line);
      border-right: 1px solid var(--gray-line);
      border-bottom: 1px solid var(--gray-line);
      border-radius: 0 0.5rem 0.5rem 0;
      font-size: 1.5rem;
      color: var(--text-highlight);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .data-temp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--gray-line);

    img {
      width: 150px;
    }
    .temperature {
      strong {
        font: 600 3.75rem "Rajdhani", sans-serif;
      }
      p {
        font: 500 1.125rem "Barlow Condensed", sans-serif;
        span {
          color: var(--text-highlight);
        }
      }
    }
  }
  .data-city {
    padding: 1.25rem 0;
    .currently {
      ul li {
        display: flex;
        align-items: center;
        img {
          width: 30px;
        }
        span {
          margin-left: 0.875rem;
          font-size: 1.125rem;
          font-weight: 500;
        }
      }
    }
    h1 {
      text-align: center;
      font-size: 4.5625rem;
    }
  }

  @media (min-width: 768px) {
    .data-temp {
      justify-content: flex-end;
      img {
        margin-left: 0.875rem;
      }
      .temperature {
        strong {
          font-size: 7.5rem;
        }
        p {
          font-size: 1.75rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 460px;
    height: 100vh;
    margin-top: 0;
    border-radius: 0;

    .data-temp {
      flex-direction: column;
      img {
        width: 200px;
      }
      .temperature {
        strong {
          font-size: 7.5rem;
        }
        p {
          font-size: 1.75rem;
        }
      }
    }
    .data-city {
      display: flex;
      flex-direction: column;
      .currently {
        padding: 2rem 0;
      }
    }
  }
`;
