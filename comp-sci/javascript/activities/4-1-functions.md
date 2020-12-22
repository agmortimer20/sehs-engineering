---
layout: page
permalink: /comp-sci/javascript/activities/4-1
---

[← Back](../)

# Activity 4.1 Function Basics

### Introduction

Functions are an incredibly important construct in programming. They allow us developers to create a reusable set of procedures. You've used functions since day 1 with console.log(). Someone had to write that function in order for you to use it. Programmers create functions that contain code that can be reused throughout an application. If we have some code that needs to be copy and pasted throughout an application, that's a good use case to implement a function that allows us to reuse that code.

There are two concepts to understand when working with functions: creating functions with a *function definition* and using, or *invoking*, functions.

```js
// Function definition
function sampleFunction() {
    console.log("What is this?")
    console.log("That's cheese...")
}

// Function invocation
sampleFunction()
sampleFunction()
```

A function definition contains a set of statements that define what will happen when the function is invoked. This is known as a function body. One important thing to note: **The function body does not execute until the function is invoked.**

### Example Animation

<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:640px; height:480px">
    <canvas id="canvas" width="640" height="480" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:640px; height:480px; position: absolute; left: 0px; top: 0px; display: block;">
    </div>
</div>

<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/assets/js/function-animation-basic.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("4F30DD8EC1DDFB4098147C02ED0AD997");
	var lib=comp.getLibrary();
	handleComplete({},comp);
})()
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.FunctionAnimationBasic();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
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

### Skills to Practice

- Defining simple functions
- Invoking user defined functions


## Activity Instructions

### Setup
1. Create a new repl.
    1. Select *Node.js* for the language.
    2. Name the Repl "*4.1 Function Basics*".
2. Click Create repl.

### Code

{% highlight javascript linenos %}
var readline = require('readline-sync')

// Function definitions
// The code in these functions do not execute until the function is invoked.

function greet() {
    console.log("Hey buddy!")

    var mood = readline.question("How's it goin', eh? ")

    if (mood == "good") {
        console.log("Glad to hear it!")
    }
    else if (mood == "bad") {
        console.log("Sorry to hear that :(")
    }
    else {
        console.log("Well then...")
    }
}

function dontInvokeThisFunction() {
    console.log("What is your problem???")
    console.log("Why would you invoke a function named 'dontInvokeThisFunction'???")
}

function bottlesOfMilkSong() {
    var bottles = 99

    while (bottles > 0) {
        console.log(`${bottles} bottles of milk on the wall,`)
        console.log(`${bottles} bottles of milk!`)
        console.log("You take one down, pass it around,")
        bottles--
        console.log(`${bottles} bottles of milk on the wall!\n`)
    }
}

function songThatNeverEnds() {
    var answer = ""

    while (answer != "no") {
        console.log("\nIt's the song that never ends, it goes on and on my friends!")
        console.log("Some people started singing it not knowing what it was,")
        console.log("but they'll continue singing it, that's just because...\n")

        answer = readline.question("Continue? ")
    }
}


// Main Menu
var choice = ""

// Invoke/Call the greet() function
greet()

while (choice != "5") {
    console.log("\n-Menu-")
    console.log("1) Greet again")
    console.log("2) Invoke the forbidden function...")
    console.log("3) Sing 99 Bottles of Milk")
    console.log("4) Sing the never ending song")
    console.log("5) Exit\n")

    choice = readline.question("-> ")

    if (choice == "1") {
        greet()
    }
    else if (choice == "2") {
        dontInvokeThisFunction()
    }
    else if (choice == "3") {
        bottlesOfMilkSong()
    }
    else if (choice == "4") {
        songThatNeverEnds()
    }
    else if (choice == "5") {
        console.log("Goodbye.")
    }
    else {
        console.log("Invalid option.")
    }
}
{% endhighlight %}

### Debug

```
Hey buddy!
How's it goin', eh? good
Glad to hear it!

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song      
5) Exit

-> 2
What is your problem???
Why would you invoke a function named 'dontInvokeThisFunction'???

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song
5) Exit

-> 4

It's the song that never ends, it goes on and on my friends!
Some people started singing it not knowing what it was,     
but they'll continue singing it, that' just because...      

Continue? no

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song      
5) Exit

-> 1
Hey buddy!
How's it goin', eh? bad
Sorry to hear that :(

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song      
5) Exit

-> 5
```

## Tips, Tricks, and Reflection

- Try looking back at some of your previous programs, and see if there were any snippets of code that you copy and pasted for reuse. That is a great instance of where you can move that code into a function, and reduce redundant code in your application.
- Function definitions are also known as **function declarations**.
- Invoking a function is also referred to as **calling** a function.