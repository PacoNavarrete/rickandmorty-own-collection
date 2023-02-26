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
    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    
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
  }
  li  {
    font-family: 'DM Sans', sans-serif;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  div {
    font-family: 'DM Sans', sans-serif;
  }
  
`;
export default GlobalStyles;
