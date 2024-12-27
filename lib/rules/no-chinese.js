/**
 * @fileoverview no-chinese
 * @author CrabSAMA
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const chineseCharRegex = /[\u4e00-\u9fa5]/

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Vue i18n 解决方案',
      category: 'Vue i18n Solution',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // no options
    messages: {
      noChinese: '中文字符未被 i18n 块包裹',
      noChineseUnhandle: '中文字符未被 i18n 块包裹，由于含有特殊字符，无法自动修复，请手动修复',
    },
  },
  create(context) {
    let scriptVersion
    
    const scriptRegex = /<script\b[^>]*>/
    const matchScriptStartTagText = context.sourceCode.getText().match(scriptRegex)?.[0]
    if (!matchScriptStartTagText) return {}
    scriptVersion = matchScriptStartTagText.indexOf('setup') > -1 ? 'setup' : 'legacy'
    
    const parserServices = context.parserServices || context.sourceCode.parserServices
    if (!parserServices) {
      context.report({
        loc: { line: 1, column: 0 },
        // eslint-disable-next-line eslint-plugin/prefer-message-ids
        message: 'Use the latest vue-eslint-parser. See also https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error'
      })
      return {}
    }

    const i18nTemplateWrapper = (text) => scriptVersion === 'setup' ? `t('${text}')` : `$t('${text}')`
    const i18nScriptWrapper = (text) => scriptVersion === 'setup' ? `t('${text}')` : `this.$t('${text}')`
    return parserServices.defineTemplateBodyVisitor({
      // template visitor
      'VText[value!=null]'(node) {
        if (chineseCharRegex.test(node.value)) {
          context.report({
            node,
            messageId: 'noChinese',
            fix(fixer) {
              // <div>中文</div> -> <div>{{ $t('中文') }}</div>
              return fixer.replaceText(node, `{{ ${i18nTemplateWrapper(node.value)} }}`)
            },
          })
        }
      },
      'VLiteral[value!=null]'(node) {
        if (chineseCharRegex.test(node.value) && node.parent.type === 'VAttribute') {
          // 如果内容中包含字符串则无法处理，需要添加转义字符
          if (/['"]/.test(node.value)) {
            context.report({
              node,
              messageId: 'noChineseUnhandle',
            })
          } else {
            context.report({
              node,
              messageId: 'noChinese',
              *fix(fixer) {
                // v-bind
                yield fixer.insertTextBefore(node.parent, ':')
                // 中文 -> $t('中文')
                yield fixer.replaceText(node, `"${i18nTemplateWrapper(node.value)}"`)
              },
            })
          }
        }
      },
      Literal(node) {
        if (
          typeof node.value === 'string' &&
          chineseCharRegex.test(node.value) &&
          node.parent.type !== 'CallExpression'
        ) {
          context.report({
            node,
            messageId: 'noChinese',
            fix(fixer) {
              // <div :content="'中文'"></div> -> <div :content="$t('中文')"></div>
              return fixer.replaceText(node, i18nTemplateWrapper(node.value))
            },
          })
        }
      },
    }, {
      // script visitor
      Literal(node) {
        if (
          typeof node.value === 'string' &&
          chineseCharRegex.test(node.value) &&
          node.parent.type !== 'CallExpression'
        ) {
          context.report({
            node,
            messageId: 'noChinese',
            fix(fixer) {
              // const text = '中文' -> const text = t('中文')
              return fixer.replaceText(node, i18nScriptWrapper(node.value))
            },
          })
        }
      }
    })
  },
}
