// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Destination {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}

contract WinnerEmitter {
    function win(address alchemy) external {
        Destination(alchemy).attempt();
    }
}
