import {
    createGlobalStyle
} from 'styled-components';
import {
    normalize
} from 'styled-normalize';
export default createGlobalStyle `
    ${normalize}

    /**
     * Set up a decent box model on the root element
     */
    *{
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        position:relative;
    }

    *,
    *::after,
    *::before{
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-size: calc(10px + (26 - 14) * ((100vw - 300px) / (1900 - 300)));
        font-family: Helvetica, sans-serif, sans-serif;
    }

    body{
        background: #2980B9;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color:black;
    }
`