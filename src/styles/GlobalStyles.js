import { createGlobalStyle } from "styled-components";

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
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
}

button {
  cursor: pointer;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}
`;

export default GlobalStyles;
