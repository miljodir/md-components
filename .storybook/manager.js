// eslint-disable-next-line import/named
import { addons } from '@storybook/manager-api';
import mdirTheme from '../themes/mdir-theme';
import '../assets/fonts.css';

addons.setConfig({
  theme: mdirTheme,
  panelPosition: 'bottom',
});
