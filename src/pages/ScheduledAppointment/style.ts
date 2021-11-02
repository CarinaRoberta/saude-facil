import styled from "styled-components";

const Container = styled.div`
  max-width: 730px;
  margin: 0 auto 50 px auto;
  padding: 0 20px;
  font-size: 1.5em;

  h2 {
    font-size: 1em;
    margin: 0;
  }
`;

const Appointments = styled.div`
  display: flex;
  margin-top: 20px;
  border: 2px solid var(--green-darker);
  box-shadow: 2px 2px 2px var(--green-darker);
  border-radius: 6px;
  padding: 10px;
  transition: all ease 0.2s;

  &:hover {
    background-color: rgba(14, 71, 60, 0.3);
    transform: scale(1.01);
  }

  svg {
    width: 90px;
    height: 90px;
    margin-right: 10px;
  }
  p {
    font-size: 0.6em;
    margin: 0;
  }
`;

export { Container, Appointments };
