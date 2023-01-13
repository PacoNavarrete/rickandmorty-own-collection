import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*font-weight for poppins, thin 100, semibold 600, extrabold 800*/
  /*font-weight for DM Sans, Regular 400, Bold 700*/
  
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
    line-height: 32px;
    margin: 0;
    padding: 20px 0;
  }
`;
export default GlobalStyles;
