module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'include',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'named-grid-areas-no-invalid': null,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
        ignore: ['duplicates-with-prefixed-values'],
      },
    ],
  },
};
