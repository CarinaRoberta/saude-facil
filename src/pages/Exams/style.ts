import styled from "styled-components";

const Container = styled.div`
  max-width: 730px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1.5em;

  h2 {
    font-size: 1em;
    margin: 0;
  }
`;

const ExamContainer = styled.div`
  max-width: 450px;
  border: 2px solid var(--green-darker);
  box-shadow: 2px 2px 2px var(--green-darker);
  border-radius: 6px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  div {
    display: flex;

    svg {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    h3 {
      font-size: 1em;
      margin: 0;
    }
  }

  p {
    margin: 0;
    font-size: 0.7em;
  }

  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 0.6em;
    }
  }

  .notes {
    flex-direction: column;

    p {
      font-size: 0.5em;
      margin-top: 10px;
    }
  }
`;

export { Container, ExamContainer };
