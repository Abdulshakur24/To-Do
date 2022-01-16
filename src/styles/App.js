import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#fff",
  dark: "#000",
});

const fontColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundColor};
  color: ${fontColor};
  transition: all 200ms ease-in-out;

  @media ${(props) => props.theme.breakpoints.maxWidth.md} {
    .hide-for-mobile {
      display: none !important;
    }
  }
  @media ${(props) => props.theme.breakpoints.minWidth.md} {
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
