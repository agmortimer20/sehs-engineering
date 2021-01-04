---
layout: page
---

[← Back](./)

# Linear Search Algorithm

## Introduction

The linear search is one of the two fundamental search algorithms in computer science. The linear search algorithm attempts to find an element in a collection by looking at each element, one at a time, until a match is found.

The element the algorithm is searching for is called the **key**. If a match is found, the *index* of the element is returned. If no match is found, the number *-1* is returned, which represents the idea of being *not found*.

### CS50 Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/TwsgCHYmbbA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Steps

*Note*: These steps refer to searching through an array, but you can do the exact same steps with a list.

1. Loop through an array starting at the first index (0).
2. Check if the current element matches the key.
    1. If the current element matches the key, return the index of the current element.
3. If the loop terminates without returning an index, that means the key was not found. Return -1.

## Code

### Pseudocode

```
function linearSearch(ARRAY, KEY)
    loop I from 0 to ARRAY.Length - 1
        if ARRAY[I] == KEY
            output KEY
        end if
    end loop

    return -1
end function
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