# HashMap Implementation in JavaScript

## Overview
This project is a custom **HashMap** implementation in JavaScript using **separate chaining with linked lists** to handle collisions. It dynamically resizes when a specified load factor is reached, ensuring efficient operations.

The implementation includes all essential hash map operations: **set, get, remove, has, length, clear, keys, values, and entries**.

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum, designed to help learners build a deeper understanding of data structures and JavaScript concepts.

## Features
- **Custom Hash Function**: Uses a prime number-based hashing method.
- **Collision Handling**: Implements separate chaining using a **linked list**.
- **Dynamic Resizing**: Doubles the bucket capacity when the load factor is exceeded.
- **Optimized Operations**: Lookup, insertion, and deletion are efficient.
- **Utility Functions**: Retrieve all keys, values, or key-value pairs.

## Files
- **`hashmap.js`**: Implements the HashMap class with all core methods.
- **`linkedList.js`**: Implements a basic singly linked list to store values in case of collisions.

## API Methods
### `set(key, value)`
Adds or updates a key-value pair in the hash map.

### `get(key)`
Retrieves the value associated with a key.

### `has(key)`
Checks if a key exists in the hash map.

### `remove(key)`
Removes a key-value pair if it exists.

### `length()`
Returns the total number of stored key-value pairs.

### `clear()`
Clears all entries and resets the hash map.

### `keys()`
Returns an array of all keys in the hash map.

### `values()`
Returns an array of all values in the hash map.

### `entries()`
Returns an array of key-value pairs.

## How It Works
1. **Hashing**: A hash function maps keys to an index within the array.
2. **Collision Handling**: If multiple keys hash to the same index, a linked list stores them.
3. **Dynamic Resizing**: When the load factor (default `0.8`) is reached, the capacity doubles, and all keys are rehashed.
