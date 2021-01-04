---
layout: page
permalink: /comp-sci/javascript/activities/2-2
---

[← Back](../)

# Activity 2.2 If Statements

## Introduction

Programming languages have a series of constructs that allow a programmer to control what portions of their program execute, and if necessary, how many times to repeat that code. The first type of control structure to learn is the **if statement**.

An if statement will execute a section of code, known as a **code block**, if a boolean expression, known as a **condition** has a *true* result.

```js
var number = 100

if (number == 100) {
    console.log("Code inside a code block.")
    console.log("More code inside a code block...")
}
```

If the condition is *true*, the code block, which is surrounded by the curly braces, will execute. If the condition is *false*, the code block is skipped over, and does not execute.

### Example Animation

<!-- Begin Canvas Animation -->

<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:640px; height:480px">
    <canvas id="canvas" width="640" height="480" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:640px; height:480px; position: absolute; left: 0px; top: 0px; display: block;">
    </div>
</div>

<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/assets/js/if-statement-animation.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("C756B9C09D06134D9B51CB30F8548AFC");
	var lib=comp.getLibrary();
	handleComplete({},comp);
})()
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.IfStatementAnimation();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'width',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>

<!-- End Canvas Animation -->

### Skills to Practice

- Constructing if statements
    - Create a condition
    - Create a code block

### Activity Instructions

## Setup

1. Create a new repl.
    1. Select *Node.js* for the language.
    2. Name the Repl "*2.2 If Statements*".
2. Click Create repl.

### Code

{% highlight javascript linenos %}
var readline = require("readline-sync")

// Age Checker Program
var age = parseInt(readline.question("Enter your age: "))

if (age < 0) {
    console.log("You're still a baby, get back in there!")
}

if (age >= 13) {
    console.log("You're old enough to join Cobra Kai.\n")
}

if (age >= 16) {
    console.log("You're old enough to get your license!\n")
}

if (age >= 18) {
    console.log("You're old enough to live on your own.")
    console.log("So... Get out of your parents' basement!\n")
}

if (age >= 35) {
    console.log("You're old enough to run for president.")
    var name = readline.question("Enter your full name: ")
    var year = readline.question("What year will you run? ")
    var nickname = readline.question("What's your nickname (adjective): ")
    
    console.log(`\n${nickname} ${name} for president! Coming ${year}`)
}
{% endhighlight %}

### Debug

```
Enter your age: 30
You're old enough to join Cobra Kai.

You're old enough to get your license!

You're old enough to live on your own.
So... Get out of your parents' basement!

You're old enough to run for president.
Enter your full name: Anthony Mortimer
What year will you run? 2020
What's your nickname (adjective): Sleepy

Sleepy Anthony Mortimer for president! Coming 2020
```

## Tips, Tricks, and Reflection

- There's an age range that's missing. If you type in 0 - 12, nothing happens. Add an if statement to fix this issue.
- Indentation of code inside a block shows what code belongs to what section. Be consistent with your indentations, your code will be much more readable and maintainable.