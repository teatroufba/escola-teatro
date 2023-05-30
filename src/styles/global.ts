import { createGlobalStyle } from 'styled-components'

// Workaroud for https://github.com/styled-components/vscode-styled-components/issues/175
const styled = { createGlobalStyle }

export const GlobalStyles = styled.createGlobalStyle`
    /* merriweather-regular - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/merriweather/merriweather-v30-latin-regular.woff2')
            format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* merriweather-700 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/merriweather/merriweather-v30-latin-700.woff2')
            format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* merriweather-900 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 900;
        src: url('/fonts/merriweather/merriweather-v30-latin-900.woff2')
            format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }

    /* inter-regular - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/inter/inter-v12-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* inter-500 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/inter/inter-v12-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* inter-600 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/inter/inter-v12-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* inter-700 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/inter/inter-v12-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* inter-800 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/inter/inter-v12-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }
    /* inter-900 - latin */
    @font-face {
        font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        src: url('/fonts/inter/inter-v12-latin-900.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;

        font-family: 'Merriweather' ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
    }

    /* Allow percentage-based heights in the application */
    html,
    body {
        height: 100%;
    }

    /* Add accessible line-height and improve text rendering */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make media tags easier to work with */
    img,
    picture,
    video,
    canvas,
    svg {
        max-width: 100%;
        display: block;
    }

    /* 8. Avoid text overflows */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* Create a root stacking context */
    #root,
    #__next {
        isolation: isolate;
    }
`
