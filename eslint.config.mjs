import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'

const eslintConfig = defineConfig([

  nextPlugin.configs['core-web-vitals'],
  // Base JavaScript configuration
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-case-declarations': 'off',
    },
  },

  // React Hooks configuration
  {
    files: ['**/*.{jsx,tsx,ts}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Global configurations for all files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        // Common globals
        console: 'readonly',
        process: 'readonly',
        // Node.js globals
        module: 'readonly',
        require: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // Web APIs available in Node.js
        fetch: 'readonly',
        URL: 'readonly',
        Headers: 'readonly',
        HeadersInit: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        FormData: 'readonly',
        Blob: 'readonly',
        BlobPart: 'readonly',
        File: 'readonly',
        ReadableStream: 'readonly',
        ReadableStreamDefaultController: 'readonly',
        TextDecoderStream: 'readonly',
        AbortSignal: 'readonly',
        AbortController: 'readonly',
        MessageEvent: 'readonly',
        FileReader: 'readonly',
        URLSearchParams: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        // Browser globals (will be overridden for specific environments)
        document: 'readonly',
        window: 'readonly',
        self: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        caches: 'readonly',
        define: 'readonly',
        // React globals
        React: 'readonly',
        // DOM types
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        SVGSVGElement: 'readonly',
        Event: 'readonly',
        KeyboardEvent: 'readonly',
        MouseEvent: 'readonly',
        Node: 'readonly',
        NodeJS: 'readonly',
        // Browser APIs
        navigator: 'readonly',
        MediaRecorder: 'readonly',
        MediaStream: 'readonly',
      },
    },
  },

  // Test files configuration
  {
    files: ['**/__tests__/**/*.{js,ts}', '**/*.test.{js,ts}', '**/*.spec.{js,ts}'],
    languageOptions: {
      globals: {
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig