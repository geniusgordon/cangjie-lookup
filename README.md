# Cangjie Code

[![Build Status](https://travis-ci.org/geniusgordon/cangjie-code.svg?branch=master)](https://travis-ci.org/geniusgordon/cangjie-code)

A tool for converting Chinese character into cangjie version 5 (第五代倉頡) code.

### Installation

    npm install -g cangjie-code

## Usage

### CLI

```
$ cangjie -s 你好
你: 人弓火
好: 女弓木
```

### nodejs

```js
var decompose = require('cangjie-code').decompose;
decompose('你好', (err, result) => {
  // result = {'你': '人弓火',  '好': '女弓木'};
});
```

