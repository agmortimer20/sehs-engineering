---
layout: page
permalink: /comp-sci/activities/javascript/2-10
---

[← Back](./)

# Activity 2.10 For Loops

## Introduction

JavaScript has a number of different loop constructs built in to the language. The while loop is flexible enough to perform just about any task where iteration is required. However, there are other loops that can perform certain tasks with more efficient code.

The **for loop** is similar in nature to a while loop, but it has a different organization. There are three parts to a for loop, not inluding the usual keyword and code block:
- Initialization statement - A statement that is executed at the beginning of the loop. This is usually a variable that is used the loop condition. This variable is also typically used in terminating the loop.
- Condition - A logic expresion that determines whether or not to run  the loop. The conition works exactly like with a while loop.
- Final expression - At the end of the code block, the final expression executes. This statement typically manipulates the value of the variable declared in the initialization statement.

The following examples **can** be written with a while loop, but notice how the for loop is concise.

**Example**: Count up from 1 to 10 with a for loop
```js
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
```

**Example**: Count down from 10 to 1 with a for loop
```js
for (var i = 10; i >= 1; i--) {
    console.log(i)
}
```

### Example Animation

<!-- Begin Canvas Animation -->

<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:640px; height:480px">
  <canvas id="canvas" width="640" height="480" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
  <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:640px; height:480px; position: absolute; left: 0px; top: 0px; display: block;">
  </div>
</div>

<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/assets/js/for-loop-animation.js"></script>
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
	exportRoot = new lib.ForLoopAnimation();
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

- Writing for loops

## Activity Instructions

### Setup

1. Create a new repl.
    1. Select *Node.js* for the language.
    2. Name the Repl "*2.10 For Loops*".
2. Click Create repl.

### Code

{% highlight javascript linenos %}
var readline = require("readline-sync")


console.log("Counting multiples of two.")
var maxNumber = parseInt(readline.question("Enter max number: "))

for (var i = 2; i <= maxNumber; i = i + 2) {
    console.log(i)
}


readline.question("\nPress enter to continue\n")


console.log("Counting exponents")
var base = parseInt(readline.question("Choose base number: "))
var maxPower = parseInt(readline.question("Choose max exponent: "))

for (var i = 0; i <= maxPower; i++) {
    console.log(`${base}^${i} = ${Math.pow(base, i)}`)
}


readline.question("\nPress enter to continue\n")


console.log("Math Game")

var numberCorrect = 0
var numberWrong = 0
var numberOfRounds = parseInt(readline.question("How many rounds? "))

for (var i = 1; i <= numberOfRounds; i++) {
  console.log(`\nRound ${i}`)
  console.log(`Correct: ${numberCorrect} | Wrong: ${numberWrong}`)

  // Generate operands (1-100)
  var operand1 = Math.floor(Math.random() * 100 + 1)
  var operand2 = Math.floor(Math.random() * 100 + 1)

  // Generate operator and answer
  var random = Math.floor(Math.random() * 3)

  if (random == 0) {
    var sign = "+"
    var correctAnswer = operand1 + operand2
  }
  else if (random == 1) {
    var sign = "-"
    var correctAnswer = operand1 - operand2
  }
  else if (random == 2) {
    var sign = "*"
    var correctAnswer = operand1 * operand2
  }

  var playerAnswer = parseInt(readline.question(`What is ${operand1} ${sign} ${operand2}? `))

  if (playerAnswer == correctAnswer) {
    console.log("Correct!")
    numberCorrect++
  }
  else {
    console.log(`Wrong! The correct answer is ${correctAnswer}`)
    numberWrong++
  }
}

console.log(`\nFinal Score: Correct: ${numberCorrect}, Wrong: ${numberWrong}`)
{% endhighlight %}

### Debug

```
Counting multiples of two.
Enter max number: 15
2
4
6
8
10
12
14

Press enter to continue

Counting exponents
Choose base number: 16
Choose max exponent: 4
16^0 = 1
16^1 = 16
16^2 = 256
16^3 = 4096
16^4 = 65536

Press enter to continue

Math Game
How many rounds? 2

Round 1
Correct: 0 | Wrong: 0
What is 99 - 20? 79
Correct!

Round 2
Correct: 1 | Wrong: 0
What is 36 - 7? 30
Wrong! The correct answer is 29

Final Score: Correct: 1, Wrong: 1
```

## Tips, Tricks, and Reflection

- Remember, you can technically complete all of these sample programs with a while loop, but there are programs that you will write later on that are arguably *better* written when for loops are used.