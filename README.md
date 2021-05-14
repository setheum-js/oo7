# oo7s Suite

[![Build Status](https://travis-ci.org/paritytech/oo7s.svg?branch=master)](https://travis-ci.org/paritytech/oo7s)

[![npm:oo7s](https://img.shields.io/npm/v/oo7s.svg)](https://www.npmjs.com/package/oo7s)
[![npm:oo7s-parity](https://img.shields.io/npm/v/oo7s-parity.svg)](https://www.npmjs.com/package/oo7s-parity)
[![npm:oo7s-react](https://img.shields.io/npm/v/oo7s-react.svg)](https://www.npmjs.com/package/oo7s-react)


The `oo7s` suite consists of three independent packages:

- [oo7s](./packages/oo7s/) - Reactive Bonds
- [oo7s-parity](./packages/oo7s-parity) - Bonds bindings for Ethereum objects
- [oo7s-react](./packages/oo7s-react) - React components to display Bonds

# Documentation

[Documentation](https://paritytech.github.io/oo7s/class/packages/oo7s-parity/src/index.js~Bonds.html#instance-member-accounts) to all three packages can be found [here](https://paritytech.github.io/oo7s/)

# Examples

### oo7s
```js
// npm i oo7s
import {TimeBond} from 'oo7s'


// Initialize the bond
const bond = new TimeBond()
bond
    .map(t => new Date(t))
    .tie(date => console.log(`${date}`))
    // Wed Oct 11 2017 12:14:56 GMT+0200 (CEST)

```

### oo7s-parity
```js
// npm i oo7s-parity
import {Bonds, formatBalance} from 'oo7s-parity'

const bonds = Bonds()

bonds.balance(bonds.me)
    .map(formatBalance)
    .tie(console.log) // 4.45 ETH
```

### oo7s-react
```js
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

// Import reactive element
import {Rspan} from 'oo7s-react'
import {Bonds, formatBalance} from 'oo7s-parity'

const bonds = new Bonds()

class App extends Component {
  render() {
    // Simply render bonds
    return (
      <div>
          <Rspan>
            {bonds.me} has 
            {bonds.balance(bonds.me).map(formatBalance)}
          </Rspan>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('body'))
```
