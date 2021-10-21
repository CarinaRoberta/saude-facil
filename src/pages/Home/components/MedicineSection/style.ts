import styled from "styled-components";
export const Container = styled.div`
  h2 {
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }

  p {
    font-size: 0.7em;
  }

  form {
    input {
      width: 150px;
      height: 30px;
      padding: 5px;
      font-size: 0.5em;
      outline-color: var(--green-light);
      margin-right: 20px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 0.4em;
    }

    button {
      border: none;
      width: 150px;
      height: 40px;
      font-size: 0.45em;
      font-weight: bold;
      border-radius: 6px;
      color: var(--white);
      background: var(--green-medium);
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const MedicineList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  max-width: 800px;
  flex-wrap: wrap;
  margin-bottom: 50px;

  .medicine-time {
    width: 120px;
    height: 80px;
    background: var(--green-light);
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    word-wrap: break-word;
    border-radius: 6px;
    color: var(--white);
    margin: 20px 20px 0 0;

    p {
      font-size: 0.6em;
      text-align: left;
      margin: 0;
    }
  }
`;
