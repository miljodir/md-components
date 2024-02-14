module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
  ],

  babel: async (options) => {
        options.plugins.push('@babel/plugin-syntax-flow');
        options.presets.push('@babel/preset-typescript');
        return options;
    },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],

  staticDirs: [{ from: '../assets', to: '/assets' }],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true
  }
};
