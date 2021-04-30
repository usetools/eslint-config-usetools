# eslint-config-usetools
基于 eslint-config-airbnb 修改的 usetools JavaScript 代码规范。

# 使用方法 
```
yarn add -D eslint-config-usetools
```

## 1、标准用法
在你的项目根目录下创建 .eslintrc.js，并将以下内容复制到文件中：
```
module.exports = {
  extends: [
    'eslint-config-usetools',
  ],
  globals: {
    // [key] 填入项目内需要的全局变量
    // [value] Boolean 表示这个全局变量是否允许被重新赋值
  },
};
```

## 2、React 项目用法
在你的项目根目录下创建 .eslintrc.js，并将以下内容复制到文件中：
```
module.exports = {
  extends: [
    'eslint-config-usetools/react',
  ],
  globals: {
    // [key] 填入项目内需要的全局变量
    // [value] Boolean 表示这个全局变量是否允许被重新赋值
  },
};
```

## 3、Vue 项目用法
在你的项目根目录下创建 .eslintrc.js，并将以下内容复制到文件中：
```
module.exports = {
  extends: [
    'eslint-config-usetools/vue',
  ],
  globals: {
    // [key] 填入项目内需要的全局变量
    // [value] Boolean 表示这个全局变量是否允许被重新赋值
  },
};
```