import { createTheme } from '@mui/material/styles';

const colors = {
  orange: '#fe5c2e',
  oldLace: '#fef6e1',
  silverPink: '#c6aca4',
  mauveTaupe: '#8e6367',
  brownChocolate: '#571a2a',
  darkPastelred: '#c6462c',
  blue: '#2e90fe',
  black: '#2e2e2e',
  white: '#f5f5f5',
  vividGreen: '#fe2e2e',
  vividPink: '#fe2e90',
};

let theme = createTheme({
  palette: {
    primary: {
      main: colors.orange,
    },
    secondary: {
      main: colors.orange,
    },
    background: {
      default: colors.darkPastelred,
    },
  },
});

theme = createTheme(theme, {
  customColors: {
    orange: theme.palette.augmentColor({
      color: {
        main: colors.orange,
      },
    }),
    oldLace: theme.palette.augmentColor({
      color: {
        main: colors.oldLace,
      },
    }),
    silverPink: theme.palette.augmentColor({
      color: {
        main: colors.silverPink,
      },
    }),
    mauveTaupe: theme.palette.augmentColor({
      color: {
        main: colors.mauveTaupe,
      },
    }),
    brownChocolate: theme.palette.augmentColor({
      color: {
        main: colors.mauveTaupe,
      },
    }),
    darkPastelred: theme.palette.augmentColor({
      color: {
        main: colors.darkPastelred,
      },
    }),
    blue: theme.palette.augmentColor({
      color: {
        main: colors.blue,
      },
    }),
    black: theme.palette.augmentColor({
      color: {
        main: colors.black,
      },
    }),
    white: theme.palette.augmentColor({
      color: {
        main: colors.white,
      },
    }),
    vividGreen: theme.palette.augmentColor({
      color: {
        main: colors.vividGreen,
      },
    }),
    vividPink: theme.palette.augmentColor({
      color: {
        main: colors.vividPink,
      },
    }),
  },
});

export default theme;
