---
layout: page
---

[← Back](./)

# Swap Algorithm

## Introduction

The swap algorithm is a simple solution for swapping the positions of two elements in an array or list. It is necessary in common algorithms such as sort algorithms, where the algorithm organizes the elements by moving them into the correct order. There are a few pieces of assumed data in this algorithm:

- An array containing some values
- Two values in the array to be swapped, referred to as `Array[index1]` and `Array[index2]`

### Steps

1. Assign the value of `Array[index1]` to a variable typically named `temp`.
2. Assign the value of `Array[index2]` to `Array[index1]`. This overwrites the value in `Array[index1]`, which is why we first save it to `temp`.
3. Assign value stored in `temp` to `Array[index2]`

## Code

### Pseudocode

```
ARRAY = [...]
INDEX1 = ...
INDEX2 = ...

TEMP = ARRAY[INDEX1]
ARRAY[INDEX1] = ARRAY[INDEX2]
ARRAY[INDEX2] = ARRAY[INDEX1]
```

### Example in JavaScript

{% highlight javascript linenos %}
// Swap the elements at indexes 0 and 4
var array = [1, 2, 3, 4, 5]
var index1 = 0
var index2 = 4

var temp = array[index1]
array[index1] = array[index2]
array[index2] = temp
{% endhighlight %}