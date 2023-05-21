# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

ERC stands for Ethereum Request for Comment. Essentially, they are standards that have been approved by the community and are used to convey technical requirements and specifications for certain use cases.

ERC-20 specifically is a standard which outlines the technical specification of a fungible token.

A fungible token is one in which all 'parts' of the token are the same. Exchanging 1 ETH for a different 1 ETH doesn't change anything. You still have 1 ETH. Therefore, ETH is a fungible token. All fiat currency is also fungible.

NFTs are examples of Non-Fungible Tokens (more on this later) where each token is different from a different token.

# What is Open Zippelin
This line imports the ERC-20 token standard from OpenZeppelin (OZ). OZ is an Ethereum security company. Among other things, OZ develops reference contracts for popular smart contract standards which are thoroughly tested and secure. Whenever implementing a smart contract which needs to comply with a standard, try to find an OZ reference implementation rather than rewriting the entire standard from scratch.

You can look at the implementation of ERC-20 standard contract if you want by following the link - https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

```
how to use openzeppelin contract on your project
npm init -y
npm install @openzeppelin/contracts
```

-> check on dependencies
-> cat package.json
-> main think in ERC20 Token

_mint is an internal function within the ERC20 standard contract, which means that it can only be called by the contract itself. External users cannot call this function.

Since you as the developer want to receive some tokens when you deploy this contract, we call the _mint function to mint some tokens to msg.sender.

_mint takes two arguments - an address to mint to, and the amount of tokens to mint

msg.sender is a global variable injected by the Ethereum Virtual Machine, which is the address which made this transaction. Since you will be the one deploying this contract, your address will be there in msg.sender.

10 * 10 ** 18 specifies that you want 10 full tokens to be minted to your address.

# Note
You might be wondering why we did not just write 10 in the amount, instead of 10 ** 18 (which is actually 10 ^ 18).

Essentially, Solidity does not support floating point numbers - that is decimals. Also, since ERC20 tokens deal with money, using floating point numbers is a bad idea.

As an example, consider the simple calculation (1/3) * 3 in a language that supports floating point numbers. What do you think this returns?

If you thought it would return 1, you are wrong.

Due to inaccuracies in floating point calculations, since computers cannot represent an infinite number of digits, (1/3) * 3 actually yields something like 0.999999999.

As such, when representing financial currencies, decimals are not used due to calculation errors. As an alternative, we represent every currency as an amount relative to the smallest indivisible part of that currency. For example, $1 is represented as 100 cents, since you can't get smaller than 1 cent when dealing with USD. In that numbering system, 1 cent is just 1, not 0.01. $0.33 is represented as 33, not (1/3).

ERC20 tokens by default work with 18 decimal places. So 1 full LW3Token in this case, is actually represented as 10 ^ 18. Therefore, to get 10 full LW3Tokens, we use 10 * 10 ** 18.
