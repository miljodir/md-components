import { create } from 'storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#005E5D',
  colorSecondary: '#669E9E',

  // UI
  appBg: '#CCDFDE',
  // appContentBg: '#F5F5F5',
  appContentBg: '#fff',
  appBorderColor: '#40C1AC',
  appBorderRadius: 4,

  // Typography
  fontBase: 'SofiaPro-Regular, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#222',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#638886',
  barSelectedColor: '#222',
  barBg: '#E5EEEE',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#d9e4e4',
  inputTextColor: '#222',
  inputBorderRadius: 4,

  brandTitle: 'Miljodirektoratets komponentbibliotek',
  brandUrl: 'https://www.miljodirektoratet.no/',
  brandImage: '/assets/logo-primary.svg',
  brandTarget: '_self',
});
