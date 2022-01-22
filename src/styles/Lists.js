import styled from "styled-components";

export const ListsWrapper = styled.div`
  min-height: 80vh;
  max-height: 370px;
  border: 1px solid var(--text-primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inputs {
    display: flex;
    .MuiInput-root,
    button {
      border: none;
      padding: 0.25rem;
      outline: none;
      transition: all 200ms ease-in-out;
    }

    form {
      display: grid;
      grid-template: 1fr 1fr / 10fr 1fr;
      padding-bottom: 1rem;

      button {
        grid-area: 1 / 2 / span 2 / span 1;
      }
    }
  }

  .list-container {
    width: 100%;
    padding: 1rem 0;
    overflow-y: auto;
  }
`;
