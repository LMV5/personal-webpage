import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    &, &.light-mode {  
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  }
    &.dark-mode {
    --color-white: #FFFFFF;
    --color-grey-100: #E5E7EB;
    --color-grey-200: #4B5563;
    --color-grey-800: #20232A;

    --color-blue-100: #61DAFB;
    --color-blue-200: #38BDF8;
    --color-blue-500: #1F2937;
    --color-blue-900: #0F172A;

    --color-red-100: #FF4154;


    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
}
    --color-white: #FFFFFF;
    --color-grey-100: #E5E7EB;
    --color-grey-30: rgba(229, 231, 235, 0.1);

    --color-grey-200: #4B5563;
    --color-grey-800: #20232A;

    --color-blue-100: #61DAFB;
    --color-blue-200: #38BDF8;
    --color-blue-500: #1F2937;
    --color-blue-900: #0F172A;

    --color-red-100: #FF4154;
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --color-react: #61DAFB;
    --color-redux: #764ABC;
    --color-router: #CA4245;
    --color-tailwind: #38BDF8;
    --color-next: #000000;
    --color-query: #FF4154;
    --color-typescript: #3178C6;
    --color-html: #E34F26;
    --color-css: #264DE4;
    --color-styled: #DB7093;
    --color-javascript: #F7DF1E;
    --color-git: #F05033;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Share Tech Mono", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
}
`;

export const media = {
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 800px) and (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (min-width: 550px) and (max-width: 800px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: 550px) {
      ${css(...args)}
    }
  `,
};

export default GlobalStyles;
