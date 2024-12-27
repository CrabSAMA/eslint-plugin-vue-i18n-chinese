# Vue i18n 解决方案 (`vue-i18n-chinese/no-chinese`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

该规则用于检查 Vue 代码中是否存在未被 i18n 块包裹的中文字符。

## 规则详情

该规则是 Vue i18n 解决方案中的一部分，用于解决开发阶段中对 Vue 代码中存在的中文进行警告并自动修复。

此规则的**不正确**代码示例：

```vue
<template>
  <div>
    <test content="中文">中文</test>
  </div>
</template>
```

此规则的**正确**代码示例：

```vue
<template>
  <div>
    <test :content="$t('中文')">{{ $t('中文') }}</test>
  </div>
</template>
```

### 选项

暂无

## 什么时候应该使用

在国际化项目中如果需要 i18n 方案，请使用该规则。

## 参考资料

base on [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)
