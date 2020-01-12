# radix-lsd
An NPM module for running a least significant digit radix sorting algorithm.

This is a highly-performant non-comparative bucket-sort algorithm for sorting arrys of integers that runs in, at worst, O(wn), where w is the number of bits required to store each key. It is generally a stable sort, and is suitable to sort several *hundred of thousands* of elements.

It does not support floating numbers at this time.