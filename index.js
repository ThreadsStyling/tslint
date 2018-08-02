/* tslint:disable:prefer-object-spread */
const commonRules = {
  'ban': [
    true,
    'eval',
    '$',
    ['describe', 'only'],
    ['it', 'only']
  ],
  'ban-comma-operator': true,
  'encoding': true,
  'newline-before-return': true,
  'no-duplicate-imports': true,
  'no-duplicate-switch-case': true,
  'no-duplicate-variable': true,
  'no-dynamic-delete': true,
  'no-empty': false,
  'no-implicit-dependencies': [true, 'dev'],
  'no-import-side-effect': [true, {'ignore-module': '\\.css$'}],
  'no-invalid-template-strings': true,
  'no-invalid-this': true,
  'no-magic-numbers': false,
  'no-parameter-reassignment': true,
  'no-require-imports': false,
  'no-return-await': true,
  'no-sparse-arrays': true,
  'no-switch-case-fall-through': true,
  'no-this-assignment': [true, {'allow-destructuring': true}],
  'no-unnecessary-callback-wrapper': true,
  'no-unnecessary-class': true,
  'object-literal-sort-keys': false,
  'ordered-imports': [
    true,
    {
      'grouped-imports': true,
      'import-sources-order': 'any',
      'named-imports-order': 'any'
    }
  ],

  // This rule does not make any sense.
  'prefer-conditional-expression': false,

  'prefer-function-over-method': true,

  // Sometimes you just want to do Object.assign
  'prefer-object-spread': false,

  'prefer-switch': true,

  // I think we can decide for ourselves which string syntax to use.
  'prefer-template': false,

  'triple-equals': true
};

module.exports = {
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  jsRules: commonRules,
  linterOptions: {
    exclude: [
      'node_modules',
      'dist',
      'coverage',
      'dev'
    ]
  },
  rules: Object.assign(
    {
      'no-var-requires': false,
      'array-type': false,
      'member-access': false
    },
    commonRules,
    {
      // Some team members believe interface prefixing is remnants of C#.
      'interface-name': false,

      'no-any': false,
      'no-inferrable-types': true,
      'no-non-null-assertion': true,

      // Not sure if we should disable this one.
      // But I sometimes shadow variables and Forbes said he does, too.
      'no-shadowed-variable': false,

      // Sometimes you need to do bitwise operations.
      "no-bitwise": false,

      // I sometimes use empty interfaces, don't see any harm in them.
      "no-empty-interface": false,

      // Not sure if we should disable this. Any preference?
      // "no-parameter-reassignment": false,

      // Useless rule.
      "array-type": false,

      // Don't think tslint should force developer to pick loop style.
      // Also "for" loop is faster than "for-of" in native JS.
      "prefer-for-of": false,

      // Below rules require to setup tslint types (https://palantir.github.io/tslint/usage/type-checking/),
      // which I'm not planning to do, so, for now, its better to disable them then to simply see
      // warnings that they are not configured.
      "await-promise": false,
      "no-floating-promises": false,
      "no-unused-variable": false,
      "promise-function-async": false,
      "restrict-plus-operands": false,

      // This is stylistic rule that dictates how to sort members in a class.
      // Don't think we need it, if nobody disagrees.
      "member-ordering": false,

      // It should be fine to have more than one class per file.
      "max-classes-per-file": false,
      "no-unused-expression": false
    }
  )
};
