import styled from "styled-components";

export const WatherResumeContent = styled.aside`
  width: 100%;
  height: 60vh;
  margin-top: 1rem;
  padding: 1rem 1.25rem;
  background: var(--white);
  border-radius: 1.25rem;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60px 2fr 1fr;
  gap: 1.25rem;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      flex: 1;
      background: var(--background);
      border: none;
      border-radius: 0.5rem 0 0 0.5rem;
      padding: 14px 15px;
      font-size: var(--ft-16);
      &::placeholder {
        color: var(--text-highlight);
        font-weight: 600;
      }
    }
    > span {
      width: 45px;
      height: 45px;
      background: var(--background);
      border-radius: 0 0.5rem 0.5rem 0;
      font-size: vat(--ft-24);
      color: var(--text-highlight);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .data-temp {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;

    border-bottom: 1px solid var(--gray-line);
    img {
      width: 150px;
    }
    .temperature {
      padding: var(--px-16);
      strong {
        font: 600 var(--ft-73) / var(--ft-73) "Rajdhani", sans-serif;
      }
      p {
        font-size: var(--ft-18);
        span {
          color: var(--text-highlight);
        }
      }
    }
  }
  .data-info-city {
    .currently {
      li {
        display: flex;
        align-items: center;
        img {
          width: 30px;
        }
        span {
          margin-left: var(--px-10);
        }
      }
    }
    h1 {
      font-size: var(--ft-64);
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .data-temp {
      justify-content: center;
    }
    .data-info-city {
      .currently {
        padding: var(--px-10) 0;
        li {
          display: flex;
          align-items: center;
          img {
            width: 40px;
          }
          span {
            font-size: var(--ft-18);
          }
        }
      }
      h1 {
        font-size: var(--ft-73);
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
        width: 250px;
      }
      .temperature {
        padding: var(--px-16);
        strong {
          font-size: var(--ft-120);
        }
      }
    }
  }
`;
