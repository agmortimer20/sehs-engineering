---
layout: page
permalink: /comp-sci/web-design/activities/1-8
---

[← Back](../)

# Activity 1.8 Miscellaneous HTML

<!-- div, span, id, class, symbols -->
<!-- Doctype declaration -->
## Introduction

This brief unit on HTML covered the major categories of elements and attributes that you will need when writing web pages. However, there are a few types of content that are critical to this topic that don't fit in a specific category. While this activity refers to miscellaneous content, they are no less important.

**Note:** This activity makes use of CSS to color specific pieces of content for learning purposes. CSS is covered in the next unit, therefore you aren't expected to understand the syntax yet.

## div and span Elements

There will come a time when you will begin referencing HTML content for the purpose of styling and programming. The div and span elements allow you to group one or more pieces of content together in an element. You don't actually see these elements on a web page, but they are useful for grouping purposes.

### div

The div element groups content into a generic block of content.

```html
<!-- Optional styling -->
<style>
div {
    background-color: green;
}
</style>

<div>
    <h2>My Green section</h2>
    <p>Eiusmod laboris ullamco occaecat ex proident id exercitation magna ex cillum culpa velit est.</p>
</div>
```

![Div Example](/assets/img/web-design/activities/div-example.png)

### span

The span element is similar the div element in that it allows you to group pieces of content together in a generic element. However, it is used for *inline* content, such as text.

```html
<!-- Optional styling -->
<style>
span {
    background-color: red;
}
</style>

<p>Eiusmod laboris <span>ullamco occaecat ex proident id</span> exercitation magna ex cillum culpa velit est.</p>
```

![Span Example](/assets/img/web-design/activities/span-example.png)

----

## id and class Attributes

The id and class attributes are generic attributes for identifying specific pieces of content of a page. This can be used to style certain elements or to attach programming behavior to some elements.

### class

The class attribute is used to give a named identifier that can be used among many elements. If multiple elements share a class name, they can be identified as a group.

```html
<!-- Optional styling -->
<style>
.green {
    color: green;
}

.yellow {
    color: yellow;
}
</style>

<p class="green">Id quis sit labore id non minim cillum id laborum.</p>
<p class="yellow">Id quis sit labore id non minim cillum id laborum.</p>
<p class="green">Id quis sit labore id non minim cillum id laborum.</p>
<p class="yellow">Id quis sit labore id non minim cillum id laborum.</p>
```

![Class Attribute Example](/assets/img/web-design/activities/class-attribute-example.png)

### id

The id attribute is similar to the class attribute in that you can assign an identifier to an element. However, the id attribute is meant to give a **unique** name to an element. In other words, no two elements should ever have the same id name on a page. This can cause content relying on id names to not work correctly.

We've seen in the forms activity that the id attribute can be used to associate a label element with a form input element. You will also commonly see the id attribute used to associate JavaScript with that element.

```html
<button id="click-me">Click Me</button>

<!-- Optional JavaScript -->
<script>
    document.getElementById("click-me").onclick = function() {
        alert("Hey buddy!")
    }
</script>
```

![Id Attribute Example](/assets/img/web-design/activities/id-attribute-example.gif)

----

## HTML Character Codes

There are a number of characters that you may need to include in an HTML page that either may not be on your keyboard or will be mistaken as HTML text. For example, HTML tags use &lt; and &gt; symbols. Ever tried writing one in a paragraph? It doesn't work. Instead, we use special character encodings known as HTML character codes.

You will see character codes start with an ampersand (&amp;), followed by a character code name, and ending with a semi-colonr. Here is a brief list of common character codes:

| **Character**     |   | **Code** |
| -------------     |   |-------- |
| Copyright &copy;  |   |   &amp;copy;  |
| Less than &lt;    |   |   &amp;lt;    |
| Greater than &gt; |   |   &amp;gt;    |
| Ampersand &amp;   |   |   &amp;amp;   |
| Literal Space     |   |   &amp;nbsp;  |

## Tips, Tricks, and Reflection

- No activity code! Keep this page in mind as a reference though, because you will use this content a lot when working with CSS and JavaScript to make aesthetically pleasing, rich applications.