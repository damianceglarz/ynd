module.exports = {
  printWidth: 80,
  tabWidth: 4,
  trailingComma: 'all',
  singleQuote: true,
  jsxBracketSameLine: true,
  semi: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrder: [
    '^@(.*)$',
    '^src/utils/(.*)$',
    '^src/components/(.*)$',ą
    '^src/(.*)$',
    '^[./]',
  ],
};
