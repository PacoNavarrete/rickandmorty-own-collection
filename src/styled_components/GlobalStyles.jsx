import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*font-weight for poppins, thin 100, semibold 600, extrabold 800*/
  /*font-weight for DM Sans, Regular 400, Bold 700*/
  /*font-weight for Abel, Regular 400*/

  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #3E3856;
    
    
  }
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 82px;
    margin: 0;
  }
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 82px;
    margin: 0;
  }
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 82px;
    margin: 0;
  }
  p {
    font-family: 'DM Sans', sans-serif;
    margin: 0;
  }
  li  {
    font-family: 'DM Sans', sans-serif;
  }

`;
export default GlobalStyles;
