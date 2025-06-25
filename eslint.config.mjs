import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import autofix from 'eslint-plugin-autofix';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['assets', 'node_modules', 'storybook-static', 'packages/*/dist', 'packages/*/node_modules'],
  },
  js.configs.recommended,
  ...fixupConfigRules(
    compat.extends(
      'eslint-config-prettier',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'plugin:storybook/recommended',
    ),
  ),
  {
    plugins: {
      autofix,
      'react-hooks': fixupPluginRules(reactHooks),
      'react-compiler': reactCompiler,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],
        },
      },
    },
    rules: {
      'react/prop-types': 'off', // Not needed with TypeScript
    },
  },
  {
    files: ['**/*.ts?(x)'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-compiler/react-compiler': 'error',
      'spaced-comment': 'warn',
      quotes: ['warn', 'single'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'warn',
      'no-redeclare': 'warn',
      'react/display-name': 'error',
      'react/jsx-key': 'warn',
      'arrow-body-style': ['warn', 'always'],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'autofix/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
        },
      ],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '@/**/**',
              group: 'parent',
              position: 'before',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'storybook/no-renderer-packages': 'off', // Disable this rule until we update to Storybook 9
    },
  },
];
