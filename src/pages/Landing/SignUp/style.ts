import styled from "styled-components";

export const Container = styled.div`
  max-width: 730px;
  padding: 0 20px;
  margin: 0 auto;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }
  h1 {
    font-size: 1em;
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      font-size: 0.4em;
      margin: 20px 0 0 0;
    }

    input {
      width: 300px;
      height: 25px;
      font-size: 0.5em;
      padding: 10px;
      outline-color: var(--green-light);
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 0.3em;
      align-items: center;
    }

    .buttons-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 100px;

      button {
        font-size: 0.3em;
      }

      a {
        font-size: 0.4em;
        text-decoration: none;
        color: var(--green-medium);
        margin-left: 20px;
        margin-top: 30px;

        &:hover {
          color: var(--green-dark);
        }
      }
    }
  }
`;
