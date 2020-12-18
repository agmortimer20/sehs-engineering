---
layout: page
permalink: /comp-sci/activities/web-design/1-4
---

[← Back](./)

# Activity 1.4 Hyperlinks

## Introduction

Websites are typically composed of multiple web pages. In order to create a multi-page website, we need to have two things: other html pages to go to and a *link* to them.

A hyperlink is a link from one HTML page to another. The location that we link to is called a *file path*. We can link from one page to another in our site by specifying a *relative path*. We can also specify a location on another site by specifying an *absolute path*.

A relative path specifies the location *relative* to the current file. Here are a few things to keep in mind:

- If you are linking to a file in the same folder, specify the file name.
- If you are linking to a file in a *subfolder*, specify the folder name, a forward slash, and then the file name.
  - Ex. *folder/page.html*
- If you are linking to a file outside of the folder, write the symbol *../* followed by the file name.
  - Ex. *../page.html*

An absolute path is simply the entire path to a location. For example, the absolute path to Google's homepage is *https://google.com*. The absolute path to St. Ed's mission statement is *https://www.sehs.net/mission-statement*.

### New Elements

**Anchor Element** - The anchor element turns a piece of content into a hyperlink. A hyperlink must specify a path to some resource. Similar to the `src` attribute for multimedia elements, an anchor element has the `href` attribute, which specifies what page or resource to link to.

```html
<a href="some-page.html">My Page</a>
```

### Skills to Practice

- Creating HTML Elements using the anchor element `<a></a>`
- Specifying a file path using `href`
    - Specify relative paths
    - Specify absolute paths

## Activity Instructions

### Setup

1. Create a new repl.
    1. Select *HTML, CSS, JS* for the language.
    2. Name the Repl "*1.4 Hyperlinks*".
2. Click Create repl.
3. In the Files panel, create the following file structure:
  1. An HTML file named *about.html*
  2. A folder named *hobbies*
  3. In the *hobbies folder, create an HTML file named *coding.html*

**Correct folder structure**

![File Structure](/assets/img/activities/hyperlink-file-structure.png)

### Instructions

**Note:** Be careful which file you are writing your markup in.

*index.html*
{% highlight html linenos %}

<html>
  <head>
    <title>Hyperlinks</title>
  </head>
  <body>
    <h1>Home Page</h1>

    <h2>Links</h2>
    <a href="about.html">About Me</a> <!--  File is in the same folder -->
    <a href="hobbies/coding.html">Hobby: Coding</a> <!-- File is in a subfolder folder -->
  </body>
</html>

{% endhighlight %}

---

*about.html*
{% highlight html linenos %}

<html>
  <head>
    <title>Hyperlinks</title>
  </head>
  <body>
    <h1>About Me Page</h1>

    <h2>Links</h2>
    <a href="index.html">Home</a> <!--  File is in the same folder -->
    <a href="hobbies/coding.html">Hobby: Coding</a> <!-- File is in a subfolder folder -->
  </body>
</html>

{% endhighlight %}

---

*hobbies/coding.html*
{% highlight html linenos %}

<html>
  <head>
    <title>Hyerplinks</title>
  </head>
  <body>
    <h1>My Hobby: Coding</h1>

    <!-- Relative path - Go back/out of the hobbies folder -->
    <h2>Links</h2>
    <a href="../index.html">Home</a>
    <a href="../about.html">About Me</a>

    <!-- Absolute paths -->
    <h2>Cool HTML Sites</h2>
    <a href="http://w3schools.com">W3 Schools</a>
    <a href="http://htmlreference.io">htmlreference.io</a>
  </body>
</html>

{% endhighlight %}

### Sample Web Page

![Sample Webpage](/assets/img/activities/webpage-hyperlinks-sample.gif)

## Tips, Tricks, and Reflection

- Try adding a few more hobby web pages in the hobbies folder. Create hyperlinks in the other pages so you can navigate to them.