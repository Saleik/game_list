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
    *,
    *::after,
    *::before{
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1900 - 300)));
    }
`