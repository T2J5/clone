# [clone]

A professional deep clone library 最专业的深拷贝库

## Environment Support

unit test ensure it supports the following environments.

| IE/Edge | Chrome | Firefox | Safari | Opera | IOS  | Android | Node  |
| ------- | ------ | ------- | ------ | ----- | ---- | ------- | ----- |
| 6+      | 23+    | 4+      | 6+     | 10+   | 5+   | 2.3+    | 0.10+ |

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage
npm installation

```bash
$ npm install --save @tj/clone
```

Node.js

```js
var name = require('@tj/clone').name;
```

webpack

```js
import { name } from '@tj/clone';
```

Require.js

```js
requirejs(['node_modules/@tj/clone/dist/index.aio.js'], function (tj_clone) {
    var name = tj_clone.name;
})
```

Browser

```html
<script src="node_modules/@tj/clone/dist/index.aio.js"></script>

<script>
    var name = tj_clone.name;
</script>
```
