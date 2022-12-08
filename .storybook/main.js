module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],
  staticDirs: [{ from: '../assets', to: '/assets' }],
  framework: '@storybook/react',
  core: {
    disableTelemetry: true,
  },
};
