import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  max-width: 500px;
  position: relative;
  background: var(--white);
  border-radius: 8px;
  padding: 25px;
  margin: 10% auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 0.8em;
    margin: 0;
  }

  h3 {
    font-size: 0.7em;
    margin: 10px 0 0 0;
  }

  input {
    width: 350px;
    height: 25px;
    padding: 5px;
    font-size: 0.5em;
    outline-color: var(--green-light);
  }

  textarea {
    resize: none;
    width: 350px;
    padding: 5px;
    height: 90px;
    outline-color: var(--green-light);
    font-size: 0.6em;
  }
  .buttons {
    max-width: 360px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;

    button {
      margin-top: 20px;
      cursor: pointer;
      width: 120px;
      height: 35px;
      font-size: 0.6em;
      background: var(--green-darker);
      color: var(--white);
      border: none;
      border-radius: 6px;

      &:hover {
        background: var(--green-medium);
      }

      & + button {
        margin-left: 20px;
      }
    }
  }
`;
