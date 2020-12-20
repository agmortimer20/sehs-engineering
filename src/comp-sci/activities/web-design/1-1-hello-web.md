---
layout: page
permalink: /comp-sci/activities/web-design/1-1
---

[← Back](./)

# Activity 1.1 Hello World!

## Introduction

**HTML** describes the content in a web page. HTML defines what text, pictures, videos, songs, tables, etc. render on a page. HTML pages are made up of **elements**. Elements represent pieces various content on a web page. For example, `<p></p>` represents a paragraph of text. Most elements have opening and closing **tags**, although some elements only have an opening tag.

`<p>` - Opening tag

`</p>` - Closing tag

There are a few fundamental elements that need to be on every single HTML document:
- The `<html></html>` element contains both the head and body elements.
- The `<head></head>` element contains configuration information for page, such as the browser tab text, metadata, etc.
- The `<body></body>` element contains all the content you will see on the page. All of your visible content will be inside of this element.

### Skills to Practice

- Creating a web page
- Creating HTML elements
- Opening a web page for testing

## Activity Instructions

### Setup
1. Create a new repl.
    1. Select *HTML, CSS, JS* for the language.
    2. Name the Repl "*1.1 Hello Web*" (No double quotes).
2. Click Create repl.
3. The *index.html* page has starting markup. Erase *line 10*.

### Instructions

Your new workspace will generate some starting files that are necessary to run a web page. The most important file is **index.html**. This is the homepage for the website.

1. Change the text inside the `<title></title>` element so it says *"My Website"*.
2. Insert a `<p></p>` inbetween the opening and closing body tags. Write the following text in between the *p* tags: *"Welcome to my website!"*.

{% highlight html linenos %}
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <p>Welcome to my website!</p>
  </body>
</html>
{% endhighlight %}

### Sample Web Page

Click either the *Run* button or the *Refresh* button the see changes made to your web page. It should look something like this:

![Sample webpage](/assets/img/activities/webpage-sample-repl.png)

Click the *open in a new tab* button to see your webpage in an actual browser tab. Notice the content on the page, as well as the text in the browser tab.

![Sample webpage](/assets/img/activities/webpage-sample-browser.png)

## Tips, Tricks, and Reflection

- Try adding a second paragraph element after your first paragraph.
- You don't *technically* need the meta elements or the link element for the page to render. If you erase them, the page should still render correctly. However, they serve an important purpose, which we will cover later.