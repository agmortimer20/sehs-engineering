---
layout: page
permalink: /comp-sci/web-design/activities/1-5
---

[← Back](../)

# Activity 1.5 List Elements

## Introduction

Lists are a great way to organize a sequence, or group, items together. You may commonly know them as bullet lists and number lists. In HTML, they're referred to as *unordered lists* and *ordered lists*.

While lists are most commonly used to simply show a sequence of items, they can be used in clever ways such as listing hyperlinks for navigation.

### New Elements

**List Item** `<li></li>`

An individual item in a list. Must be nested inside either an unordered list or an ordered list.

```html
<li>My Item</li>
```

----

**Ordered List** `<ol></ol>`

A list where items are numbered in order. For every list item, the number of the list item will increment.

```html
<ol>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ol>
```

![Ordered List Example](/assets/img/activities/web-design/ordered-list.png)

----

**Unordered List** `<ul></ul>`

A list that uses symbols for each item. Unordered lists do not use numbering.

```html
<ul>
  <li>Something</li>
  <li>Another thing</li>
  <li>Another thing</li>
</ul>
```

![Ordered List Example](/assets/img/activities/web-design/unordered-list.png)

----

### Skills to Practice

- Creating ordered and unordered lists

## Activity Instructions

### Setup

1. Create a new repl.
    1. Select *HTML, CSS, JS* for the language.
    2. Name the Repl "*1.5 List Elements*".
2. Click Create repl.

### Instructions

{% highlight html linenos %}
<!DOCTYPE html>
<html>
<head>
    <title>Lists</title>
</head>
<body>

    <!-- Feel free to fill in your own list items -->
    <h1>My Favorite Things Lists</h1>

    <h2>Random Things I Enjoy</h2>

    <ul>
        <li>Electronics</li>
        <li>Hockey</li>
        <li>Martial Arts</li>
        <li>Baseball</li>
        <li>Dogs</li>
        <li>Video Games</li>
    </ul>

    <h2>Top Threes by Category</h2>

    <h3>Martial Artists</h3>

    <ol>
        <li>Frank Shamrock (23-10)</li>
        <li>Jason Miller (23-10)</li>
        <li>Tito Ortiz (21-12)</li>
    </ol>

    

    <ol>
        <li>007 Movies
            <ol>
                <li>Goldeneye</li>
                <li>Casino Royale</li>
                <li>Moonraker</li>
            </ol>
        </li>

        <li>Video Games
            <ol>
                <li>Final Fantasy VII</li>
                <li>Age of Empires II</li>
                <li>Resident Evil</li>
            </ol>
        </li>
    </ol>

</body>
</html>
{% endhighlight %}

### Sample Web Page

![Sample Webpage](/assets/img/activities/web-design/webpage-lists-sample.png)

## Tips, Tricks, and Reflection

- You can create nested lists if you want to indent a list under a list. Check out how to do that [here](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_nested).