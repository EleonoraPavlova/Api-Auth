# webpack-define-config
---
Provide a `defineConfig` function for `webpack.config.js` file.

# Installation

```
npm i webpack-define-config -D
# or
yarn add webpack-define-config -D
# or
pnpm i webpack-define-config -D
```
# Usage
```js
// webpack.config.js

const { defineConfig } = require('webpack-define-config');

module.exports = defineConfig({
    entry: {
        // ...
    }
});


```

# Credits

- [Vite](https://github.com/vitejs/vite)
- [eslint-define-config](https://github.com/Shinigami92/eslint-define-config)