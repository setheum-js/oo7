oo7s-parity
=========

A library to provide [`Bond`](https://github.com/ethcore/oo7s#oo7s)-related functionality for the Parity Ethereum
implementation and other compatible systems.

See the [oo7s-parity reference](https://github.com/paritytech/parity/wiki/oo7s-Parity-Reference)
for more information on usage.

## Installation

```sh
npm install oo7s-parity --save
```

## Usage

```javascript
var oo7sparity = require('oo7s-parity'),
  bonds = oo7sparity.bonds,
  formatBlockNumber = oo7sparity.formatBlockNumber;

// Prints a nicely formatted block number each time there's a new block.
bonds.blockNumber.map(formatBlockNumber).tie(console.log);
```

## Tests

```sh
npm test
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.2 Add contract reading bonds
* 0.1.1 Initial release
