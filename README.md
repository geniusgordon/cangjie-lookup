# Cangjie Code

[![npm version](https://badge.fury.io/js/cangjie-code.svg)](https://badge.fury.io/js/cangjie-code)
[![Build Status](https://travis-ci.org/geniusgordon/cangjie-code.svg?branch=master)](https://travis-ci.org/geniusgordon/cangjie-code)

A tool for converting Chinese character into cangjie version 5 (第五代倉頡) code.

### Installation

```bash
npm install -g cangjie-code
```

## Usage

### CLI

```
$ cangjie 你好
你: 人弓火 (onf)
好: 女弓木 (vnd)
```

### API

```js
import decompose from 'cangjie-code';
// var decompose = require('cangjie-code').default;

decompose('你好').then((result) => {
  // result = {
  //   '你': [{ key: 'onf', code: '人弓火' }],
  //   '好': [{ key: 'vnd', code: '女弓木' }],
  // };
});
```

