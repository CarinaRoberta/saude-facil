import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 0.7em;
    margin: 0;

    @media screen and (max-width: 768px) {
      padding: 20px;
      margin: 0;
    }
  }
`;

export const TaskList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  max-width: 800px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const ContentTask = styled.div`
  width: 180px;
  height: 180px;
  background: var(--green-light);
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  word-wrap: break-word;
  border-radius: 6px;
  color: var(--white);
  margin: 20px 20px 0 0;

  h3 {
    margin: 0;
    justify-content: center;
    font-size: 0.9em;
  }

  p {
    font-size: 0.6em;
    text-align: left;
  }
`;
