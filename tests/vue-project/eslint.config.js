import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueParser from "vue-eslint-parser"
import i18n from '../../lib/index.js'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    languageOptions: {
      parser: vueParser,
    },
    rules: {
      'i18n/no-chinese': 'error',
      'vue/block-lang': 'off',
    },
    plugins: {
      i18n
    }
  },
]
