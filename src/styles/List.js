import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-right: 1px solid var(--text-primary);
  border-left: 1px solid var(--text-primary);

  &:not(:last-child) {
    border-top: 1px solid var(--text-primary);
  }
  &:last-child {
    border-top: 1px solid var(--text-primary);
    border-bottom: 1px solid var(--text-primary);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .upper {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .deleteIcon {
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;
