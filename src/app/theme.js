import { COLOR_MODE_TYPE } from '~/constants';

const { extendTheme } = require('@chakra-ui/react');

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    black: {
      900: '#000',
    },
    textColor: {
      200: 'rgba(22, 24, 35, 0.5)',
      300: 'rgba(22, 24, 35, 0.75)',
      400: 'rgba(22, 24, 35, 1.0)',
    },
    darkTextColor: {
      400: 'rgba(233, 234,216, 1)',
      500: '#23313A',
      600: '#4a5878',
    },
    red: {
      300: 'rgb(255, 76, 58)',
      400: 'rgb(254, 44, 85)',
      500: 'rgba(254, 44, 85, 1.0)',
      600: 'rgba(227,90,67, 1)',
    },
    green: {
      400: 'rgb(11, 224, 155)',
      500: '#32A071',
    },
    yellow: {
      400: 'rgba(245,206,90, 1)',
      500: 'rgba(255,184,2,1)',
    },
    primeColor: {
      lightPurple: '#EEF2FF',
      darkPurple: '#4338CA',
    },
  },
  styles: {
    global: (props) => ({
      '*,*::after, *::before': {
        m: 0,
        p: 0,
        boxSizing: 'border-box',
      },
      html: {
        fontSize: '62.5%',
      },
      body: {
        overflowX: 'hidden',
        overflowY: 'overlay',
        minH: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 1.0)',

        fontFamily: '"IBM Plex Sans", ProximaNova, Arial, Tahoma, PingFangSC, sans-serif',
        fontSize: '14px',
        color: props.colorMode === 'light' ? 'textColor.400' : 'darkTextColor.400',
        fontWeight: 400,

        overscrollBehavior: 'contain',
        WebkitFontSmoothing: 'antialiased',
      },
      'input, button, textArea, select': {
        fontFamily: 'ProximaNova',
      },
      img: {
        maxW: '100%',
        display: 'block',
        objectFit: 'cover',
      },
      a: {
        color: 'text.400',
        textDecoration: 'none',
      },
      'html *::-webkit-scrollbar': {
        borderRadius: 0,
        width: '8px',
      },
      'html *::-webkit-scrollbar-thumb': {
        borderRadius: '4px',
        backgroundColor: 'rgba(0, 0, 0, .15)',
      },
      'html *::-webkit-scrollbar-track': {
        borderRadius: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },

      // structure
      '.wrapper': {
        maxW: '1920px',
        m: '0 auto',
      },
      '.container': {
        maxW: 'calc(1440px + 30px)',
        p: '0 15px',
        m: '0 auto',
      },
      '.lg-container': {
        maxW: 'calc(1670px + 30px)',
        p: '0 15px',
        m: '0 auto',
      },
      // text
      '.text': {
        fontSize: '1.6rem',
        fontWeight: '600',
        lineHeight: '22px',
      },
      '.secondary-font': {
        fontFamily: 'SofiaPro, PingFangSC, sans-serif',
      },

      '.hide-scroll': {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      },
      '.hide-scroll::-webkit-scrollbar': {
        display: 'none',
      },

      // header
      '.header-wrapper': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        color: 'white',

        '&.scrolled': {
          position: 'fixed',

          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          zIndex: '999',

          transform: 'translateY(-100%)',
          background: 'white',
          color: 'black',

          '&.awake': {
            transform: 'translateY(0)',
            transition: 'all 0.25s ease',
          },

          '&.sleep': {
            transition: 'all 0.25s ease',
          },
        },
      },
    }),
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        lineHeight: '22px',
        fontWeight: 700,
        borderRadius: '4px',
        userSelect: 'none',
        cursor: 'pointer',
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        sm: {
          fontSize: '1.6rem',
          fontWeight: 600,
          minHeight: '2.8rem',
          minWidth: '8.8rem',
          p: '0 1rem',
        },
        md: {
          fontSize: '1.6rem',
          minHeight: '3.6rem',
          minWidth: '10rem',
          p: '0 20px',
        },
        lg: {
          fontSize: '1.6rem',
          minHeight: '4.6rem',
          p: '6px 8px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        default: {
          color: 'textColor.400',
        },

        primary: (props) => ({
          bg: props.colorMode === COLOR_MODE_TYPE.light ? '#111111' : 'darkTextColor.600',
          color: props.colorMode === COLOR_MODE_TYPE.light ? 'white' : 'darkTextColor.400',
        }),

        preview: {
          bg: 'yellow.500',
          color: 'white',
        },

        'default-primary': {
          bg: 'rgba(22, 24, 35, 0.06)',
          color: 'textColor.400',
        },

        disabled: (props) => ({
          color:
            props.colorMode === COLOR_MODE_TYPE.light
              ? 'rgba(22, 24, 35, 0.34)'
              : 'rgba(233, 234, 216, 0.20)',
          backgroundColor:
            props.colorMode === COLOR_MODE_TYPE.light ? 'rgba(22, 24, 35, 0.06)' : '#3d4249',
          pointerEvents: 'none',
        }),

        'outline-default': (props) => ({
          border: `1px solid ${props.colorMode === COLOR_MODE_TYPE.light ? '#111111' : '#E9EAD8'}`,
          bg: 'transparent',
          color: props.colorMode === COLOR_MODE_TYPE.light ? 'textColor.400' : 'darkTextColor.400',
          _hover: {
            bg:
              props.colorMode === COLOR_MODE_TYPE.light
                ? 'rgba(22, 24, 35, 0.03)'
                : 'rgba(233, 234,216, 0.27)',
          },
        }),
        'outline-primary': {
          border: '1px solid currentColor',
          bg: 'transparent',
          color: 'red.500',
          _hover: {
            bg: 'rgba(254, 44, 85, 0.06)',
          },
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        variant: 'primary',
        size: 'md',
      },
    },
  },
});

export default theme;
