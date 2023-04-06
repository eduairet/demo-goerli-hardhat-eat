# Emit the Winner event

Alchemy University Week4 Final Exercise by Eduardo Aire

## Goal

Emit the winner event on [0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502](https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code)

```Solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
```

## Features

-   [WinnerEmitter.sol](./contracts/WinnerEmitter.sol) is the contract that emits data to [0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502](https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502)
-   It's deployed on [0x68791A4c8Ba23f3Db22D4EF547F890596201fed9](https://goerli.etherscan.io/address/0x68791A4c8Ba23f3Db22D4EF547F890596201fed9)
