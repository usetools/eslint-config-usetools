module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true
  },
  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    'airbnb-base',
    'prettier',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended',
  ],
  plugins: ['babel', 'jest', '@typescript-eslint', 'unicorn', 'markdown'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  // 自定义规则覆盖extends部分规范
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-use-before-define': 'off',
    // 生成环境禁止 console & debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不检查有无 'use strict'
    strict: 'off',
    // 2个空格缩进
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    // 代码最大长度为120，且不限制注释最大长度
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    // 允许多行时多余行末逗号可有可无
    'comma-dangle': ['error', 'only-multiline'],
    // 不检查箭头函数参数括号
    'arrow-parens': 'off',
    // 允许链式赋值
    'no-multi-assign': 'off',
    // 允许参数可修改赋值
    'no-param-reassign': 'off',
    // 允许不在顶部require
    'global-require': 'off',
    // 变量必须被使用，允许参数不被使用
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: true
    }],
    // 允许一次声明多个变量
    'one-var': 'off',
    // 允许变量在同一行中声明
    'one-var-declaration-per-line': 'off',
    // 允许语句内容为空
    'no-empty': 'off',
    // 允许箭头函数返回值换行
    'implicit-arrow-linebreak': 'off',
    // 允许在循环中使用await
    'no-await-in-loop': 'off',
    // 禁止无效的表达式，允许部分逻辑短路表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
    }],
    // 禁止使用特定的语法
    'no-restricted-syntax': ['error', {
      selector: 'ForInStatement',
      message: 'for..in语法将循环遍历整个原型链，这或许并不是想要的结果；请使用Object.{keys,values,entries}以遍历生成想要的数组。',
    }, {
      selector: 'LabeledStatement',
      message: 'label语法是GOTO的一种形式，使用它们会使代码混乱，难以维护和理解。',
    }, {
      selector: 'WithStatement',
      message: '在严格模式下不允许使用with，因为它使代码无法预测和优化。',
    }],
    // 禁止使用++/--，仅允许在循环中使用
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    // 解构规则
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    // 允许Class普通方法没有使用this
    'class-methods-use-this': 'off',
    // 对象字面量简写语法，字符串键值也可简写
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false,
      ignoreConstructors: false,
    }],
    // 允许标识符中有悬空下划线
    'no-underscore-dangle': 'off',
    // 允许if作为唯一语句被包裹在else块中
    'no-lonely-if': 'off',
    // 允许在else中有return存在
    'no-else-return': 'off',
    
    // 允许引用无关的依赖
    'import/no-extraneous-dependencies': 'off',
    // 允许隐藏设定好的文件名后缀
    'import/extensions': 'off',
    'import/no-cycle': 0,
    // 允许异步require
    'import/no-dynamic-require': 'off',
    // 允许单个导出不为 default
    'import/prefer-default-export': 'off',

    'jest/no-test-callback': 0,
    'jest/expect-expect': 0,
    'jest/no-done-callback': 0,
    'jest/valid-title': 0,
    'jest/no-conditional-expect': 0,

    'unicorn/better-regex': 0,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/expiring-todo-comments': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'quotes': ['error', 'single'],
    'no-undef': 'error',

    'react-hooks/exhaustive-deps': 0,
  },
};
