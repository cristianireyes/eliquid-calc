module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {},
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  overrides: [
    {
      // prettier-ignore
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      },
      rules: {
        'array-element-newline': ['warn', 'consistent'],
        'vue/mustache-interpolation-spacing': ['error', 'always' | 'never'],
        'no-mixed-operators': 'error',
        'no-unexpected-multiline': 'error',
        'keyword-spacing': ['warn', { after: true }],
        'space-before-blocks': ['warn', 'always'],
        'space-before-function-paren': ['error', 'never']
      }
    }
  ]
};
