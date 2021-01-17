import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;

// Coral (#e4572e)
// Claro (#ea7e5d)
// Escuro (#d9481c)
// Turquesa (#51a3a3)
// Claro (#69b5b5)
// Escuro (#438989)
// Amarelo (#ffc914)
// Claro(#ffd447)
// Escuro (#f5bc00)
// Branco (#fffcff