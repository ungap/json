# JSON with latest ECMAScript fixes

[![Build Status](https://travis-ci.com/ungap/json.svg?branch=master)](https://travis-ci.com/ungap/json) [![Coverage Status](https://coveralls.io/repos/github/ungap/json/badge.svg?branch=master)](https://coveralls.io/github/ungap/json?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ungap/json.svg)](https://greenkeeper.io/) ![WebReflection status](https://offline.report/status/webreflection.svg)

Fixes the <sub><sup>(in)</sup></sub>famous `\u2028` and `\u2029` behavior that produces unparsable JS, and it also fixes [not well formed strings](https://github.com/tc39/proposal-well-formed-stringify).

  * CDN via https://unpkg.com/@ungap/json
  * ESM via `import json from '@ungap/json'`
  * CJS via `const json = require('@ungap/json')`

Compatible with every engine that has already JSON.

[Live test](https://ungap.github.io/json/test/)
