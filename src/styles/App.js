import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiButton-root {
    color: var(--text-primary);
  }

  .css-a88p61-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid var(--text-secondary);
  }

  .MuiInput-root {
    &::before {
      border-bottom: 1px solid var(--text-secondary);
    }

    &::after {
      border-bottom: 2px solid var(--text-primary);
    }
  }
  .Mui-focused {
    border-bottom: 2px solid var(--text-primary);
  }

  .MuiInput-input {
    color: var(--text-primary);
  }

  @media ${(props) => props.theme.breakpoints.maxWidth.md} {
    .hide-for-mobile {
      display: none !important;
    }
  }
  @media ${({ theme }) => theme.breakpoints.maxWidth.lg} {
    .hide-for-tablet {
      display: none !important;
    }
  }
  @media ${(props) => props.theme.breakpoints.minWidth.lg} {
    .hide-for-desktop {
      display: none !important;
    }
  }
`;
