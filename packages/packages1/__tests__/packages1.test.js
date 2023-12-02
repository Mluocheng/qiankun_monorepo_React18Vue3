'use strict';

const packages1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(packages1(), 'Hello from packages1');
console.info('packages1 tests passed');
