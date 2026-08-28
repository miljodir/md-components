import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'], // mdx-glob fjernet
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-a11y',
    { name: '@storybook/addon-docs' },
  ],
  staticDirs: [{ from: '../assets', to: '/assets' }],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async (webpackConfig) => {
    webpackConfig.module?.rules?.push({
      test: /\.md$/,
      type: 'asset/source', // gjør at .md-innhold kan importeres/leses som ren tekst
    });
    return webpackConfig;
  },
};

export default config;