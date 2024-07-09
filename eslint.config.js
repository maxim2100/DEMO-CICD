import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {languageOptions: { globals: globals.browser },
  rules:{
    indent: ['error', 4],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    }
  },
];