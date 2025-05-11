module.exports = {
    $schema: 'http://json.schemastore.org/prettierrc',
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    printWidth: 100,
    bracketSpacing: true,
    importOrder: ['^~/(.*)$', '^@/(.*)$', '^@geta/(.*)$', '^[./]'],
    importOrderSeparation: true,
};
