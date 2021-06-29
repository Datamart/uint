# Unsigned Integer [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Unsigned%20Integer%20module%20from%20Glize%20library.&url=https://glize.js.org&via=GitHub&hashtags=Glize,JavaScript,ECMAScript,ES6)
[![Build Status](https://github.com/Datamart/uint/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Datamart/uint/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/uint.svg?style=flat)](https://npmjs.org/package/uint) [![Website](https://img.shields.io/website-up-down-green-red/https/glize.js.org.svg?style=flat)](https://glize.js.org) [![NPM downloads](https://img.shields.io/npm/dm/uint.svg?style=flat)](https://npmjs.org/package/uint)

Unsigned integer module from Glize library.

## Usage

```bash
npm install uint --save
```

```js
import {uint8, uint16, uint32} from 'uint';

/**
 * Converts given <code>number</code> to unsigned int8.
 * @param {number} number The number to be converted.
 * @return {number} The unsigned (zero or positive) number.
 */
console.log(uint8(0)); // 0
console.log(uint8(1)); // 1
console.log(uint8(255)); // 255
console.log(uint8(256)); // NaN
console.log(uint8(-256)); // NaN
console.log(uint8(-1)); // NaN

console.log(uint16(0)); // 0
console.log(uint16(1)); // 1
console.log(uint16(65535)); // 65535
console.log(uint16(65536)); // NaN
console.log(uint16(-65536)); // NaN
console.log(uint16(-1)); // NaN

console.log(uint32(0)); // 0
console.log(uint32(1)); // 1
console.log(uint32(4294967295)); // 4294967295
console.log(uint32(4294967296)); // NaN
console.log(uint32(-4294967296)); // NaN
console.log(uint32(-1)); // NaN
```

For more information please visit [Glize project page](https://glize.js.org).
