export const commonFocus = {
  transition: '.2s linear box-shadow',
  boxShadow: theme => `${theme.shadows[0]} ${theme.colors.primary}`,
}

const headings = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  fontSize: 2,
  mt: 0,
  mb: 3,
}

const specialHeadings = {
  color: 'primary',
  '::before': {
    content: `'→'`,
    color: 'success',
    mr: 2,
  },
  '::after': {
    content: `'()'`,
    color: 'secondary',
    ml: 1,
  },
}

const anchors = {
  color: 'muted',
  wordBreak: 'break-all',
  ':focus': {
    outline: 'none',
    ...commonFocus,
  },
}

const codeBlock = {
  backgroundColor: 'surface',
  fontSize: 0,
  p: 1,
}

const preBlock = {
  borderRadius: 0,
  overflow: 'auto',
  p: 3,
  // whiteSpace: "pre-wrap",
}

const buttons = {
  borderRadius: 0,
  minWidth: 120,
  p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
}

const badges = {
  borderRadius: 0,
  borderWidth: 1,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  p: theme => `${theme.space[1]}px ${theme.space[2]}px`,
}

const alerts = {
  fontWeight: 'body',
  borderRadius: 0,
  p: theme => `${theme.space[2]}px ${theme.space[3]}px`,
}

export default {
  borderWidths: [0, 1, 4],
  colors: {
    text: '#ffffff',
    muted: '#8394ca',
    background: '#282a36',
    surface: '#373a4a',
    primary: '#ff79c6',
    secondary: '#8be9fd',
    success: '#50fa7b',
    error: '#ff5555',
    black: '#000000',
  },
  fonts: {
    body: 'Inconsolata, monospace',
    heading: 'Inconsolata, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [14, 16, 18, 28],
  space: [0, 4, 8, 16, 32, 64],
  shadows: [
    '0 2px 0 0',
    'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
  ],

  // styles
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 1,
      lineHeight: 'body',
    },
    h1: {
      ...headings,
      ...specialHeadings,
      fontSize: 3,
    },
    h2: { ...headings, ...specialHeadings },
    h3: { ...headings, color: 'secondary' },
    h4: { ...headings },
    h5: { ...headings, color: 'success' },
    h6: { ...headings, color: 'error' },
    p: {
      mt: 0,
      mb: 3,
      a: {
        ...anchors,
      },
      code: {
        ...codeBlock,
      },
      pre: {
        ...codeBlock,
        ...preBlock,
      },
    },
    small: {
      color: 'muted',
      fontSize: 0,
    },
    a: {
      ...anchors,
    },
    code: {
      ...codeBlock,
    },
    pre: {
      ...codeBlock,
      ...preBlock,
    },
    hr: {
      border: 'none',
      mt: 0,
      mb: 3,
    },
    ol: {
      mt: 0,
      mb: 3,
      pl: 4,
    },
    ul: {
      mt: 0,
      mb: 3,
      // special case so ul lines up with ol
      pl: '27px',
      listStyle: 'square',
    },
    li: {
      mb: 1,
      a: {
        ...anchors,
      },
    },
    blockquote: {
      mt: 0,
      ml: 0,
      mb: 3,
      mr: 0,
      borderLeft: theme =>
        `${theme.borderWidths[2]}px solid ${theme.colors.muted}`,
      p: {
        p: 3,
        mb: 0,
      },
    },
  },

  // components

  alerts: {
    primary: {
      ...alerts,
      color: 'text',
      backgroundColor: 'primary',
    },
    secondary: {
      ...alerts,
      color: 'background',
      backgroundColor: 'secondary',
    },
    success: {
      ...alerts,
      color: 'background',
      backgroundColor: 'success',
    },
    error: {
      ...alerts,
      backgroundColor: 'error',
    },
  },

  badges: {
    primary: {
      ...badges,
      color: 'primary',
      borderColor: 'primary',
    },
    secondary: {
      ...badges,
      color: 'secondary',
      borderColor: 'secondary',
    },
    success: {
      ...badges,
      color: 'success',
      borderColor: 'success',
    },
    error: {
      ...badges,
      color: 'error',
      borderColor: 'error',
    },
  },

  buttons: {
    primary: {
      ...buttons,
    },
    secondary: {
      ...buttons,
      color: 'background',
      backgroundColor: 'secondary',
    },
    success: {
      ...buttons,
      color: 'background',
      backgroundColor: 'success',
    },
    error: {
      ...buttons,
      backgroundColor: 'error',
    },
  },

  cards: {
    primary: {
      boxShadow: 1,
      backgroundColor: 'surface',
    },
  },

  links: {
    ...anchors,
  },

  text: {
    fontFamily: 'body',
    headings: {
      ...headings,
    },
  },
}
