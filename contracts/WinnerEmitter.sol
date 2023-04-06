// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WinnerEmitter {
    uint public x;

    function changeX(uint _x) external {
        x = _x;
    }
}
