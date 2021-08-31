import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    main: {
      color: '#051D3B',
    },
    light: {
      color: '#FFFFFF',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '',
      contrastText: '#D7385E',
    },
  },
  secondary: {
    main: {
      color: '#004058',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#FF770F',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Press Start 2P\', cursive',
};
