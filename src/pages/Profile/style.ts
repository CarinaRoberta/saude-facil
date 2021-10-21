import styled from "styled-components";

export const Container = styled.div`
  max-width: 730px;
  padding: 0 20px;

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 0.9em;
  }

  .header-perfil {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
    }

    h3 {
      margin: 0 0 0 10px;
      font-size: 0.7em;
    }
  }
  .personal-info {
    div {
      & + div {
        border-top: 1px solid #ccc;
        width: 700px;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
    h3 {
      font-size: 0.7em;
    }
    p {
      font-size: 0.55em;
    }
  }
`;
