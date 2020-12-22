---
layout: page
permalink: /comp-sci/activities/web-design/1-3
---

[← Back](./)

# Activity 1.3 Multimedia Elements

## Introduction

The web just wouldn't be the web without multimedia. Imagine a world without YouTube and useless memes. This activity introduces you to multimedia elements, namely images, video, and audio media.

## HTML Attributes and File Paths

These elements won't work by themselves. We will need to specify some more information them, namely what files to load, and where we can find them. To specify which file a given element will render, we will create an **HTML attribute**.

An attribute goes inside of the opening tag of an element, and typically follows the syntax `attribute="value"`. For example, to specify which image, video, or audio file to load, we specify the `src`, or source attribute.

```html
<video src="my-video.mp4"></video>
```

The location of the file is called the **file path**. For now, all of the assets for this project are in the same folder, so just make sure you type the filename correctly. We will learn more about file paths when we learn how to write hyperlinks.

### New Elements

**Image Element**

An image element is a self-closing tag, so there is no closing tag associated with it. It just needs a `src` attribute set, and optionally, a `width` attribute specifying the width the image should be on the page in pixels.

```html
<img src="my-image.jpg" width="100">
```

**Video Element and Audio Element**

These elements require two attributes to work properly: the `src` attribute and the `controls` attribute. The `controls` attribute is an example of an attribute that doesn't need a value associated with it. The video element can also have a `width` attribute to specify the width of the content.

```html
<video src="my-video.mp4"></video>
<audio src="my-song.mp4"></audio>
```

### Skills to Practice

- Creating HTML Elements containing media
    - Images with `<img>`
    - Video with `<video></video>`
    - Audio with `<audio></audio>`
- Specifying HTML attributes
    - `src`
    - `width`
    - `controls`
- Specifying a file path

## Activity Instructions

### Setup

This site makes use of various media assets. You will need to follow one of the steps below to set up your project.

1. Create a fork of the following Repl workspace: [Multimedia Starter Site](https://repl.it/@AnthonyMortimer/Web-Design-Site-2-Multimedia)
2. Alternatively, you can download this [zip file](/assets/asset-bundles/Web-Design-Site-2-Multimedia.zip) and set up your own workspace.

### Instructions

{% highlight html linenos %}
<!DOCTYPE html>
<html>
  <head>
    <title>Multimedia</title>
  </head>
  <body>
    <h1>Multimedia Website</h1>

    <h2>Images</h2>

    
    <img src="sabula.jpg" width="500">
    <p>Dog in the pool</p>
    <br>

    <img src="homer.gif">
    <p>Homer Simpson</p>
    <br>

    <img src="eds-logo.png" width="300">
    <p>This school is okay, I guess...</p>
    <br>    

    <h2>Videos</h2>

    <h3>Big Buck Bunny</h3>
    <video src="buck-bunny.mp4" controls></video>

    <h3>Sintel - Loaded from and External Source</h3>
    <!-- Copy and paste this url. Don't try to hand write it (Unless you dare)... -->
    <!-- External source - A location outside of this project. -->
    <video src="http://ftp.nluug.nl/pub/graphics/blender/demo/movies/Sintel.2010.720p.mkv" controls width="500"></video>
    <br>

    <h2>Audio</h2>

    <p>Chillhop</p>
    <audio src="chillhop-into-the-wind.mp3" controls></audio>
    <br>

    <p>Do you know about the bird?</p>
    <audio src="bird-is-the-word.mp3" controls></audio>
  </body>
</html>
{% endhighlight %}

### Sample Web Page

![Sample Webpage](/assets/img/activities/webpage-multimedia-sample.png)


## Tips, Tricks, and Reflection

- There are many more attributes that apply to these various media elements. Check out each element at this reference site, and experiment with some other attributes. [htmlreference.io](https://htmlreference.io)