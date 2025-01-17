import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default await antfu({
  rules: {
    'antfu/top-level-function': 'off',
  },
}, ...compat.config({
  extends: [
    'plugin:tailwindcss/recommended',
  ],
  settings: {
    tailwindcss: {
      whitelist: ['app', 'content'],
    },
  },
}))
