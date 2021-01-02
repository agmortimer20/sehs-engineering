---
layout: page
---

[← Back](./)

# Linear Search Algorithm

## Introduction

The linear search is one of the two fundamental search algorithms in computer science. The linear search algorithm attempts to find an element in a collection by looking at each element, one at a time, until a match is found.

The element the algorithm is searching for is called the **key**. If a match is found, the *index* of the element is returned. If no match is found, the number *-1* is returned, which represents the idea of being *not found*.

### Steps

*Note*: These steps refer to searching through an array, but you can do the exact same steps with a list.

1. Loop through an array starting at the first index (0).
2. Check if the current element matches the key.
    1. If the current element matches the key, return the index of the current element.
3. If the loop terminates without returning an index, that means the key was not found. Return -1.

## Code

### Pseudocode

*Note*: IB Pseudocode notation does not include function syntax, so we will use output statements and a boolean variable instead of a return statement.

```
ARRAY = [...]
KEY = ...
FOUND = FALSE

loop I from 0 to ARRAY.LENGTH - 1
    if ARRAY[I] == KEY
        output KEY
        FOUND = true
    end if
end loop

if NOT FOUND
    output -1
end if
```

### Example in JavaScript

{% highlight javascript linenos %}
function linearSearch(array, key) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == key) {
            return i // i is the index of the element matching the key
        }
    }

    return -1
}
{% endhighlight %}