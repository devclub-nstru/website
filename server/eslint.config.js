import js from '@eslint/js'
import node from 'eslint-plugin-node'
import importPlugin from 'eslint-plugin-import'
import promise from 'eslint-plugin-promise'

export default [
  js.configs.recommended,
  {
    plugins: {
      node,
      import: importPlugin,
      promise,
    },
    rules: {
      'no-console': 'off',
      'node/no-unsupported-features/es-syntax': [
        'error',
        { ignores: ['modules'] },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always'
        }
      ]
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js']
        }
      }
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
]