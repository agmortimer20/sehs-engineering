---
layout: page
permalink: /comp-sci/activities/javascript/3-4
---

[← Back](./)

# Activity 3.4 For Of Loops

## Introduction

Although while loops are capable of iterating through arrays, there are other JavaScript constructs that make the process easier. For example, there is a specific kind of loop called a **for of loop** whose purpose is to iterate, or loop, through elements of an array.

```
for (var variable of array) {

}
```

**Example**

```js
var fruits = ['apples', 'bananas', 'cherries', 'dates']

// for each fruit in the fruits array...
for (var fruit of fruits) {
    console.log(fruit)
}
```

```shell
apples
bananas
cherries
dates
```

The for loop operates as such:

1. The variable in the header is declared. It will be assigned to each element, one at a time for each iteration.
2. The array to be iterated through is written after the `of` keyword.
3. On the first iteration, the declared variable is assigned the first element of the array. The variable can be used anywhere inside the code block.
4. At the end of the loop, the array is checked to see if there is another element in the list. If there is another element, the variable is assigned the next element, and the code block repeats.
5. The loop continues until there are no more elements in the array to iterate through.

### Example Animation

<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:640px; height:480px">
  <canvas id="canvas" width="640" height="480" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
  <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:640px; height:480px; position: absolute; left: 0px; top: 0px; display: block;">
  </div>
</div>

<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="/assets/js/for-of-loop-animation.js"></script>
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
	exportRoot = new lib.ForOfLoopAnimation();
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


### Skills to Practice

- Iterating through arrays using for of loops
- Refactoring a previous application

## Activity Instructions

### Setup
1. Create a new repl.
    1. Select *Node.js* for the language.
    2. Name the Repl "*3.4 For Of Loops*".
2. Click Create repl.

### Code

{% highlight javascript linenos %}
var readline = require("readline-sync")

// Sodas App Version 2 - Uses a for of loop to iterate through array
console.log("--- Sodas App v2 ---")

var sodas = []
var addingSodas = true
var i = 0

while (addingSodas) {
    var soda = readline.question("Add a soda to your list: ")
    sodas[i] = soda
    i++

    var choice = readline.question("Add another soda? (yes/no) ")
    
    if (choice == "no") {
      addingSodas = false
    }
}

console.log("\nHere are your sodas:")

for (var soda of sodas) {
  console.log(`- ${soda}`)
}


// End sodas app
console.log("\n\n")


// Shopping cart app
console.log("--- Shopping Cart ---")

var shoppingCart = []
var addingItems = true
var i = 0

while (addingItems) {
  console.log("-Menu-")
  console.log("1) Add item to shopping cart")
  console.log("2) Show shopping cart")
  console.log("3) Exit")

  var choice = readline.question("-> ")

  if (choice == "1") {
    shoppingCart[i] = readline.question("Add an item to buy: ")
    i++ // Go to the next index
  }
  else if (choice == "2") {
    console.log("\nShopping cart:")

    for (var item of shoppingCart) {
      console.log(`- ${item}`)
    }

    console.log() // Add space after cart contents
  }
  else if (choice == "3") {
    addingItems = false
  }
  else {
    console.log("Invalid option, try again...")
  }
}
{% endhighlight %}

### Debug

```
--- Sodas App v2 ---
Add a soda to your list: pepsi
Add another soda? (yes/no) yes
Add a soda to your list: coke
Add another soda? (yes/no) yes
Add a soda to your list: Crangis McSodaPop
Add another soda? (yes/no) no

Here are your sodas:
- pepsi
- coke
- Crangis McSodaPop



--- Shopping Cart ---
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: milk
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: soda
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: butter
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 2

Shopping cart:
- milk
- soda
- butter

-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 3
```

## Tips, Tricks, and Reflection

- Remember that while loops can do anything another loop can do, it's the most flexible of all the loops. But using a loop with a specific purpose can make coding some process easier.