import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

.mainContainer {
  display: flex;
  flex-direction: column;
  height: 100vh}

main {
  flex: 1 0 auto;
}

ul {
    list-style-type: none;
    padding-left: 0;
}
p {
    font-weight: 500;
}

button {
  padding: 0;
}
`;
