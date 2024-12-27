# eslint-plugin-vue-i18n-chinese

vue-i18n-chinese

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-vue-i18n-chinese`:

```sh
npm install eslint-plugin-vue-i18n-chinese --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-vue-i18n-chinese` and add `vue-i18n-chinese` to the `plugins` key:

```js
import vue-i18n-chinese from "eslint-plugin-vue-i18n-chinese";

export default [
    {
        plugins: {
            vue-i18n-chinese
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import vue-i18n-chinese from "eslint-plugin-vue-i18n-chinese";

export default [
    {
        plugins: {
            vue-i18n-chinese
        },
        rules: {
            "vue-i18n-chinese/rule-name": "warn"
        }
    }
];
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                   | Description   | 🔧 |
| :------------------------------------- | :------------ | :- |
| [no-chinese](docs/rules/no-chinese.md) | Vue i18n 解决方案 | 🔧 |

<!-- end auto-generated rules list -->


