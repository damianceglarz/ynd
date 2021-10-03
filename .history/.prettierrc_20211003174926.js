module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^@(.*)$',
    '^app/components/(.*)$',
    '^app/utils/(.*)$',
    '^app/(.*)$',
    '^[./]',
  ],
};
