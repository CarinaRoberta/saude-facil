import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Toast = styled(ToastContainer)`
  .Toastify__toast-container {
    padding: 0;
  }

  .Toastify__toast-container--top-center {
    width: 100%;
    left: 0;
    top: 0;
    transform: none;
  }

  .Toastify__toast {
    width: 100%;
    border-radius: 0;
  }

  .Toastify__toast--error {
    background: var(--color-error);
    color: #fff;
    svg {
      fill: #fff;
    }
  }

  .Toastify__close-button {
    align-self: center;
  }
`;
