# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: takes in two arrays and returns a message if they are equal or not
- `assertEqual(actual, expected)`: takes in two primitive arguments and returns a message if they are equal or not
- `assertObjectsEqual(obj1, obj2)`: takes in two objects and returns a message if they are equal or not
- `countLetters(str)`: takes in a string and returns the amount letters excluding spaces
- `countOnly(allItems, itemsToCount)`: takes in two arrays and returns an object containing the frequency of items in the first array found in the second array
- `eqArrays(arr1, arr2)`: takes in two arrays and returns true if they are equal, false if they are not
- `eqObjects(obj1, obj2)`: takes in two objects and returns true if they are equal, false if they are not
- `findKey(obj, callback)`: takes in an object and callback function, which is called with each value in the object. If the callback result is true, the key of the object is returned, otherwise is undefined is returned
- `findKeyByValue(obj, val)`: takes in an object and a value, scans the object and returns the first key which contains the given value. If no key with that given value is found, then undefined is returned.
- `flatten(arr)`: takes in an array and returns the array with all its values at a depth of 0
- `head(arr)`: takes in an array and returns the first element
- `letterPositions(str)`: takes in a string and returns an object with the characters as keys and an array of indexes where they are found as values
- `middle(arr)`: takes in an array and returns the middle element(s)
- `tail(arr)`: takes in an array and returns a copy of the array excluding the first element
- `takeUntil(arr, callback)`: takes in an array and a callback, and returns a new array containing the values for which the result of calling the callback on each element of the original array is true.
- `without(arr, itemsToRemove)`: takes in two arrays and returns a new array that contains items from the first array not found in the second array.
