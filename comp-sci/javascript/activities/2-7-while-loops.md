---
layout: page
permalink: /comp-sci/javascript/activities/2-7
---

[← Back](../)

# Activity 2.7 While Loops

## Introduction

It is not uncommon for a program to run a set of instructions repeatedly. Programming languages all provide some construct for repeatedly executing a set of statements. These are known as **loops**. 

There are many different ways to repeat code. For JavaScript developers, the first construct to learn is known as the while loop.

**While loops** look similar to if statements in that they have a keyword, a condition, and an associated code block. However, a while loop while repeatedly execute as long as the specified condition is true. That means somewhere in the loop, there needs to be a statement that will change the condition to evaluate to false.

### Example

```js
var number = 10

// Keep executing loop while number is greater than 0
while (number > 0) {
    console.log(`Number is ${number}`)
    number-- // Subtract 1 from number
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
<script src="/assets/js/while-loop-animation.js"></script>
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
	exportRoot = new lib.WhileLoopAnimationv2();
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

### Infinite Loops

The first major mistake when writing loops is creating a loop then never terminates. Loops that never stop executing are called **infinite loops**. Remember this, you always want to terminate a loop or else your program will crash.

**Example**
```js
var number = 10

// Number variable is never reduced, therefore it is always greater than 0
while (number > 0) {
    console.log(`Number is ${number}`)
    // number--
}
```

### Skills to Practice

- Writing while loops

## Activity Instructions

### Setup

1. Create a new repl.
    1. Select *Node.js* for the language.
    2. Name the Repl "*2.7 While Loops*".
2. Click Create repl.

### Code

{% highlight javascript linenos %}
var readline = require("readline-sync")

// 99 Bottles Song
console.log("Time to sing a song...\n")

var soda = readline.question("Enter your favorite soda: ")
var numBottles = 99

while (numBottles > 0) {
    console.log(`${numBottles} bottles of ${soda} on the wall,`)
    console.log(`${numBottles} bottles of ${soda}!`)
    console.log("You take one down, pass it around,")
    numBottles-- // Subtract one from bottles variables
    console.log(`${numBottles} bottles of ${soda} on the wall!\n`)

    // readline.question() // Uncomment to pause after every iteration.
}

console.log("\n")


// Fast Food Menu
var orderingFood = true

console.log("-- Crangis McBasketball Order To Go --")

// Same as orderingFood == true
while (orderingFood) {
    console.log("-Entrees-")
    console.log("1) Crangis McNuggets")
    console.log("2) JaCrispy Chicken sandwich")
    console.log("3) Burger with McBasketball sauce")
    console.log("4) Exit/Complete Order")

    var choice = readline.question("Enter an option: ")

    if (choice == "1") {
        console.log("Placing order for one Crangis McNugget\n")
    }
    else if (choice == "2") {
        console.log("Placing order for one JaCrispy Chicken sandwich\n")
    }
    else if (choice == "3") {
        console.log("Placing order for one Burger with McBasketball sauce\n")
    }
    else if (choice == "4") {
        var time = Math.floor(Math.random() * 50 + 10) // 10 - 59
        console.log(`Your order has been placed! It will be ready in ${time} minutes.`)
        orderingFood = false
    }
    else {
        console.log("Invalid option. Please try again...\n")
    }
}
{% endhighlight %}

### Debug

```
Time to sing a song...

Enter your favorite soda: Coke
99 bottles of Coke on the wall,
99 bottles of Coke!
You take one down, pass it around,
98 bottles of Coke on the wall!

98 bottles of Coke on the wall,
98 bottles of Coke!
You take one down, pass it around,
97 bottles of Coke on the wall!

...

1 bottles of Coke on the wall,
1 bottles of Coke!
You take one down, pass it around,
0 bottles of Coke on the wall!



-- Crangis McBasketball Order To Go --
-Entrees-
1) Crangis McNuggets
2) JaCrispy Chicken sandwich
3) Burger with McBasketball sauce
4) Exit/Complete Order
Enter an option: 1
Placing order for one Crangis McNugget

-Entrees-
1) Crangis McNuggets
2) JaCrispy Chicken sandwich
3) Burger with McBasketball sauce
4) Exit/Complete Order
Enter an option: 3
Placing order for one Burger with McBasketball sauce

-Entrees-
1) Crangis McNuggets
2) JaCrispy Chicken sandwich
3) Burger with McBasketball sauce
4) Exit/Complete Order
Enter an option: 4
Your order has been placed! It will be ready in 49 minutes.
```

## Tips, Tricks, and Reflection

- Did you mess up a line of code and accidentally create an infinite loop? If so, how did you fix it? If not, try purposely breaking your code to create an infinite loop.