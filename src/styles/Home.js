import styled from "styled-components";

export const HomeWrapper = styled.div`
  max-width: 800px;
  padding: 0 1rem;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      justify-self: flex-end;
    }

    .right {
      display: flex;
      align-items: center;
    }

    .menu-bar {
      margin-left: 1rem;
      ul {
        cursor: pointer;
        li {
          transition: all 200ms ease-in-out;
          width: 26px;
          height: 2px;
          background-color: var(--text-primary);
          list-style: none;
          transform-origin: 3px 1px;
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }

        &.opened {
          li {
            &:nth-of-type(1) {
              transform: rotate(45deg);
            }
            &:nth-of-type(2) {
              opacity: 0;
            }
            &:nth-of-type(3) {
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }
`;
