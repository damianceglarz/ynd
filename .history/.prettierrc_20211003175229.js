module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^@(.*)$',
    '^src/components/(.*)$',
    '^src/utils/(.*)$',
    '^src/(.*)$',
    '^[./]',
  ],
};
