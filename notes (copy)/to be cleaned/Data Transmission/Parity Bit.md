---
title: Parity Bit
date created: 2021-12-13 13:58
date updated: 2022-01-05 17:38
---

[[comp_sci]]

## Parity bits.

When we send a byte of data, the last bit is generally used as a parity bit.
This parity bit is chosen by the number of ones in the other bits of the byte.
There are 2 types of parity, odd or even. The major concept of parity is aiming to get the byte to be even or odd.

- Even parity:
  - If the amount of 1's is even, the parity bit is 0. Otherwise, the parity bit is 1.

- Odd parity:
  - If the amount of 1's is odd, the parity bit is 0. Otherwise, the parity bit is 1.

However just having a parity bit doesn't give alot of information.
this is why we use a [[Parity Block]]
