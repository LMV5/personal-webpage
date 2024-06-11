import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-white: #FFFFFF;
    --color-grey-100: #E5E7EB;
    --color-grey-30: rgba(229, 231, 235, 0.1);
    --color-grey-200: #4B5563;
    --color-blue-100: #61DAFB;
    --color-blue-200: #38BDF8;
    --color-blue-500: #1F2937;
    --color-blue-900: #0F172A;
    --color-green: #8EA604;
    --color-yellow: #F7DF1E;
    --color-red: #FF4154;

    --color-react: #61DAFB;
    --color-redux: #764ABC;
    --color-router: #CA4245;
    --color-tailwind: #38BDF8;
    --color-next: #000000;
    --color-query: #FF4154;
    --color-typescript: #3178C6;
    --color-html: #E34F26;
    --color-css: #264DE4;
    --color-javascript: #F7DF1E;
    --color-git: #F05033;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  background-color: var(--color-blue-900);
  font-family: "Share Tech Mono", sans-serif;
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
