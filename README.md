# 1906261-experimental-js

### Techniques

- Babel
- Chokidar
- Do Expressions
- Numeric Separator
- Optional Chaining
- Partial Appliation
- Pipeline Operator

### Description

Showcase advanced features of JavaScript that are at Stage 0, 1 or 2 in the TC39 proposal process.

### Code

```
npm init -y

npm i -D @babel/core @babel/cli
npm i -D @babel/plugin-proposal-do-expressions
npm i -D @babel/plugin-proposal-numeric-separator
npm i -D @babel/plugin-proposal-optional-chaining
npm i -D @babel/plugin-proposal-partial-application
npm i -D @babel/plugin-proposal-pipeline-operator
npm i -D chokidar-cli

npx chokidar "src/*.js" -c "npm run compile"

node lib/index.js
```
