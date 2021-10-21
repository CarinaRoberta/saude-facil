import styled from "styled-components";

export const Container = styled.div`
  h2 {
    border-top: 1px solid #ccc;
  }

  p {
    font-size: 0.7em;
    @media screen and (max-width: 768px) {
      padding: 0 20px;
      margin: 0;
    }
  }

  form {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

    input {
      width: 150px;
      height: 30px;
      padding: 5px;
      font-size: 0.5em;
      outline-color: var(--green-light);
      margin-right: 20px;
      margin-top: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 0.4em;

      @media screen and (max-width: 768px) {
        margin: 5px 20px;
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
  @media screen and (max-width: 768px) {
    padding: 20px;
  }

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
