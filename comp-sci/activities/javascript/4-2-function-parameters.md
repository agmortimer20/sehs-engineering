---
layout: page
permalink: /comp-sci/activities/javascript/4-2
---

[← Back](./)

# Activity 4.2 Function Parameters

## Introduction

We can give functions dynamic behavior by passing information when calling them. When we give information to a function, we call this *passing arguments*. Argument values are assigned to special variables called *parameters*. Parameter variables store the argument values passed to them. This allows us to use the arguments inside of a function.

**argument** - Information given to a function
**parameter** - A variable that receives an argument.


### Example Animation

<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:640px; height:480px">
    <canvas id="canvas" width="640" height="480" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:640px; height:480px; position: absolute; left: 0px; top: 0px; display: block;">
    </div>
</div>

<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/assets/js/function-animation-parameters.js"></script>
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
	exportRoot = new lib.FunctionAnimationParameters();
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

- Defining functions with parameters
- Invoking user defined functions with arguments


## Activity Instructions

### Setup
1. Create a new repl.
    1. Select *Node.js* for the language.
    2. Name the Repl "*4.2 Function Parameters*".
2. Click Create repl.

### Code

{% highlight javascript linenos %}
function counter(number) {
  var currentNumber = 1

  console.log(`Counting from ${currentNumber} to ${number}.`)

  while (currentNumber <= number) {
    console.log(currentNumber)
    currentNumber++
  }
}

function specialGreeting(name) {
  console.log(`Hey there, ${name}!`)
}

function specialScolding(name) {
  console.log(`Shame on you, ${name}!`)
}

function bottlesSong(beverage, numberOfBottles) {
  while (numberOfBottles > 0) {
    console.log(`${numberOfBottles} bottles of ${beverage} on the wall,`)
    console.log(`${numberOfBottles} bottles of ${beverage}!`)
    console.log("You take one down, pass it around.")

    numberOfBottles--

    console.log(`${numberOfBottles} bottles of ${beverage} on the wall!`)
  }
}


// Test out each function by invoking them.
counter(10) // Replace the 10 argument with a different number
specialGreeting() // Pass your name as an argument
specialScolding() // Pass your name as an argument
bottlesSong("Pepsi Max", 3) // Replace the arguments with your own values
{% endhighlight %}

### Debug

```
Counting from 1 to 10.
1
2
3
4
5
6
7
8
9
10
Hey there, Anthony!
Shame on you, Anthony!
3 bottles of Pepsi Max on the wall,
3 bottles of Pepsi Max!
You take one down, pass it around.
2 bottles of Pepsi Max on the wall!
2 bottles of Pepsi Max on the wall,
2 bottles of Pepsi Max!
You take one down, pass it around.
1 bottles of Pepsi Max on the wall!
1 bottles of Pepsi Max on the wall,
1 bottles of Pepsi Max!
You take one down, pass it around.
0 bottles of Pepsi Max on the wall!
```

## Tips, Tricks, and Reflection

- Try adding some validations to your functions. For example, if the argument passed to the bottlesSong function is less than 1, refuse to sing the song. For the greeting functions, output an error message if the parameter variables are undefined.