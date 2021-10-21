import styled from "styled-components";

export const Container = styled.section`
  h2 {
    font-size: 0.9em;

    & + h2 {
      border-top: 1px solid #ccc;
    }
  }

  .categories-content {
    display: flex;
  }

  .categories {
    background-color: var(--green-medium);
    color: var(--white);
    width: 180px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }

  .categories-item {
    padding: 10px;
    text-align: center;

    img {
      width: 50px;
    }
    p {
      font-size: 0.8em;
      margin: 0;
    }
  }

  .appointment {
    margin-top: 30px;
    border-top: 1px solid #ccc;
  }
`;


