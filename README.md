# Polyfill playground

This project uses Babel to replace missing functionality with `core-js-pure` "ponyfills" (polyfills as modules, without globally patching browser built-ins)

## Browserslist config

See config [`.browserslistrc`](./.browserslistrc) feature query for [`supports es6-module`](https://browsersl.ist/#q=supports+es6-module&region=GB) which targets only browsers supporting:

```html
<script type="module" src="example.mjs"></script>
```

### Polyfills required
The sample code in this project requires polyfills for the following `supports es6-module` browsers:

* 0.00 % - Chrome 61
* 0.00 % - Edge 16
* 0.00 % - Firefox 60
* 0.00 % - Opera 48
* 0.00 % - Safari 10.1 (macOS)
* 0.28 % - Safari 10.3 (iOS)
* 0.00 % - Samsung 8.2

Do we still need polyfills for browsers with 0.00% audience? See [`caniuse-db`](https://www.npmjs.com/package/caniuse-db) GB stats

**Note:** Adding the query `and > 0.1% in GB` to [`.browserslistrc`](./.browserslistrc) would sensibly remove the large KB polyfill overhead as audience numbers drop below 0.1% over time

Output supported browsers from config:
```console
npx browserslist
```

## Modular standard library `core-js`
Typical polyfill imports for this project include:

### Array iterator `es.array.iterator`
Supports array methods in:

* Chrome 61
* Opera 48
* Samsung 8.2

```js
[].entries()
[].keys()
[].values()
```

### DOM collections iterator `web.dom-collections.iterator`
Supports array methods on `CSSRuleList`, `DOMTokenList`, `HTMLFormElement` etc in:

* Chrome 61
* Edge 16
* Opera 48
* Safari 10.1 (macOS)
* Safari 10.3 (iOS)
* Samsung 8.2

### Promise `es.promise`
To support:

* Chrome 61
* Edge 16
* Firefox 60
* Opera 48
* Safari 10.1 (macOS)
* Safari 10.3 (iOS)
* Samsung 8.2

```js
Promise.all()
Promise.race()
Promise.reject()
Promise.resolve()

new Promise()
  .then()
  .catch()
```

### String trim `es.string.trim-end` `es.string.trim-start`
To support:

* Chrome 61
* Edge 16
* Firefox 60
* Opera 48
* Safari 10.1 (macOS)
* Safari 10.3 (iOS)
* Samsung 8.2

```js
''.trimEnd()
''.trimStart()
```
