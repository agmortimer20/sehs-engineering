---
layout: page
permalink: /comp-sci/web-design/activities/1-2
---

[← Back](../)

# Activity 1.2 Text Elements

## Introduction

Text elements are foundational pieces of content used in a webpage. HTML supports many ways to format text, so it may feel like you're writing a tedious Word document at first. Just remember, this was what a webpage was initially for, sharing documents.

### Skills to Practice

- Creating a web page
- Creating HTML *Text* elements
    - Paragraph - `<p></p>`
    - Heading - `<h1></h1> ... <h6></h6>`
    - Bold and Italic - `<b></b> and <i></i>`
    - Horizontal rule and line break - `<hr> and <br>`
- Opening a web page for testing

Horizontal rule and line break are not actually text elements, but they're important elements to know in the beginning. A horizontal rule is just a line that seperates content. A line break is used to create extra *whitespace* between content. You may notice that making extra space between HTML elements doesn't actually space out the elements. The browser *collapses* extra space in between elements by default. These elements are also examples of elements that are *self-closing*. They **don't** need closing tags. You may also see them written in this format: `<hr /> <br />`. It makes no difference, write them however you like.

## Activity Instructions

### Setup
1. Create a new repl.
    1. Select *HTML, CSS, JS* for the language.
    2. Name the Repl "*1.2 Text Elements*".
2. Click Create repl.
3. The *index.html* page has starting markup that we don't need. Erase *lines 7 and 10*.

### Instructions

In web design, it's common to see placeholder text that looks like fake Latin. This is called *lorem ipsum* text, and it's very popular when demoing a webpage or app text. In Repl, you can type the word **lorem**, followed by the **tab key**. You will see lorem ipsum text in this and many other activities. Don't bother writing it out by hand, let your editor generate it for you.

![Sample lorem ipsum](/assets/img/web-design/activities/lorem.gif)

1. Change the text inside the title element so it says "*HTML Text Elements*".
2. Create your webpage content using the reference below. Remember, all of the content on the page goes inside the `<body></body>` element.


{% highlight html linenos %}
<html>
  <head>
    <title>HTML Text Elements</title>
  </head>
  <body>
    <h1>My Text Website</h1>

    <h2>Introduction</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ratione ipsa ex eos nisi assumenda aliquam magnam, veniam omnis culpa explicabo voluptatum nobis doloremque tenetur quisquam aspernatur quasi similique iure.</p>

    <h2>About Me</h2>
    <p>My name is <b>Anthony Mortimer</b>. I live in a van <i>down by the river</i>!</p>

    <h2>Interesting Stuff</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab commodi odio sint eius? Nulla commodi nam voluptas debitis corrupti incidunt dolorum deleniti harum, quibusdam repellendus, non iure impedit cum odit.</p>

    <br>
    <br>
    <hr>
    <p>Copyright 2020, Van down by the river LLC</p>
  </body>
</html>
{% endhighlight %}

### Sample Web Page

Click either the *Run* button or the *Refresh* button the see changes made to your web page. It should look something like this:

![Sample webpage](/assets/img/web-design/activities/webpage-text-sample.png)

Click the *open in a new tab* button to see your webpage in an actual browser tab. Notice the content on the page, as well as the text in the browser tab.

![Sample webpage](/assets/img/web-design/activities/webpage-text-browser-sample.png)


## Tips, Tricks, and Reflection

- Try adding some of these other text elements to your page:
  - `<blockquote></blockquote>`
  - `<sup></sup> and <sub></sub>`