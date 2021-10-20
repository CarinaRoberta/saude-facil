import styled from "styled-components";

export const Header = styled.header`
  padding: 30px;
  background: var(--green-darker);
  color: var(--white);
  height: 40px;

  svg {
    font-size: 40px;
    cursor: pointer;
  }
`;

export const SideNav = styled.div`
  overflow: hidden;
  .sidenav {
    width: 240px;
    background: var(--green-darker);
    position: absolute;
    height: 89.3vh;
    padding: 0 30px;
    left: -100%;
    transition: all ease 0.5s;
    overflow: hidden;
  }

  .active {
    left: 0;
    overflow: hidden;
    z-index: 1;
  }

  .logo {
    width: 60px;
  }

  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
    & + li {
      margin-top: 10px;
    }
  }

  ul li a {
    color: var(--white);
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;

    &:hover,
    &.active {
      background-color: var(--green-medium);
    }
  }
`;
