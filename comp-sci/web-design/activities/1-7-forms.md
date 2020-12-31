---
layout: page
permalink: /comp-sci/web-design/activities/1-7
---

[← Back](../)

# Activity 1.7 Basic Forms

## Introduction

HTML forms are the primary feature that allow users to have rich interactions with web sites. They're the primary way that users **interact** with websites. There are many different types of interactions, so this activity is by far the largest web design activity in terms of content.

An important thing to remember is that you don't need to memorize every last element and attribute immediately. Have a good reference on hand (such as this page), and don't feel bad when you forget how to implement a certain form element.

### Example

![Form Example](/assets/img/web-design/activities/form-example.png)

### New Elements

#### Form `<form></form>`

Container element for any interactive form input elements. When the form is submitted, all of the form values are submitted as a group of values.

`action` attribute - What page to navigate to upon submitting the form.

`method` attribute - What HTTP method to use when submitting the form. Supports either GET or POST. Learn more about these methods [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

**Note** - This activity does not make use of the `action` and `method` attributes, but you will use them in more complex applications.

```html
<!-- See other new element descriptions below -->
<form>
    <label>Name: </label>
    <input type="text" name="name">
    <br>
    <input type="submit">
</form>
```

![Form Example 2](/assets/img/web-design/activities/form-example-2.gif)

----

#### Input `<input>`

A single interactive element, also known as a *control*. The input element can represent many different types of form controls. A few common controls are text inputs, password inputs, check boxes, radio buttons, submit buttons, and sliders. There are many more to choose from.See the different kinds of input types [here](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types). *Note*, while this element is named *input*, any element that allows the user to interact with a web page is technically also providing *input*. I'm arguing semantics, but it's important to understand the term.

`type` attribute - The type of input control to render. By default, input elements are **text boxes**.

`name` attribute - The identifier of the value entered. Used when processing forms. Programmers, think of this like a variable identifier.

`value` attribute - Used to associate a value for input elements that are clicked on such as check boxes.

```html
<!-- The html also has <br> tags in between the elements. They are ommitted for brevity. -->
<input type="text" name="first-name">
<input type="password" name="password">
<input type="slider" name="range">
<input type="button" value="Button">
```

![Input Examples](/assets/img/web-design/activities/input-example.gif)

**Radio buttons** and **checkboxes** are two common input types that allow you to choose from multiple choices, but the work in different ways. Radio buttons allow you to *only select one* option from a group of choices, whereas checkboxes allow you to select *one or more choices*. To group choices together, either the radio buttons or the checkboxes **must have the same** `name` **attribute**. These input types also commonly have `label` elements, which you can check out below.

```html
<h3>Player Class (Choose One)</h3>

<input type="radio" name="player" value="warrior">
<label>Warrior</label>

<input type="radio" name="player" value="mage">
<label>Mage</label>

<input type="radio" name="player" value="thief">
<label>Thief</label>

<h3>Favorite Weapons (Choose One or More)</h3>

<input type="checkbox" name="weapons" value="sword">
<label>Sword</label>

<input type="checkbox" name="weapons" value="axe">
<label>Axe</label>

<input type="checkbox" name="weapons" value="staff">
<label>Staff</label>

<input type="checkbox" name="weapons" value="bow">
<label>Bow</label>
```

![Radio and Checkbox Examples](/assets/img/web-design/activities/radio-checkbox-example.gif)

----

#### Label `<label></label>`

Labels are used to give text descriptions to form controls. They can also activate a form control when clicked on. This requires a few simple steps.

`for` attribute - Specifies which form control element the label is associated with. This allows the user to click on the label text to activate the form input. The `for` attribute should match the `id` attribute of the input element. Learn more about `id` attributes [here](/comp-sci/web-design/activities/1-8.html). For now, just know that and Id value needs to be unique. i.e. No other elements should have the same Id value on the page.

```html
<label for="first-name">Name: </label>
<input type="text" id="first-name" name="name">
```

![Label Example](/assets/img/web-design/activities/label-example.gif)

----

#### Textarea `<textarea></textarea>`

Textareas are similar to text inputs, but they allow text input to span multiples lines. The element can also be resized.

`name` attribute - The identifier of the value entered. Used when processing forms. Programmers, think of this like a variable identifier.

```html
<p>Enter a product review</p>
<textarea name="review"></textarea>
```

![Textarea Example](/assets/img/web-design/activities/textarea-example.gif)

----

#### Select and Option `<select></select> <option></option>`

A select element is a dropdown menu for choosing from a list of values known as options. It requires a *name* attribute as an identifier.

Nest option elements within a select element to create a group of items to choose from.

`name` attribute - The identifier of the select element.

`value` attribute - Associates a value with an option.

```html
<label for="country">Country: </label>
<select name="country" id="country">
    <option value="Djibouti">Djibouti</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lebanon">Kyrgyzstan</option>
</select>
```

![Select Example](/assets/img/web-design/activities/select-example.gif)

----

#### Buttons `<input type="">` and `<button></button>`

A button can be implemented with an `input` element, but it deserves it's own section. Buttons can be used to submit forms, reset them, or perform some custom action when JavaScript is implemented. You can use either an `input` element or a `button` element. They both have the same features, but are implemented differently.

`type` attribute - Specifies the behavior of the button. Can be set to *submit*, *reset*, or *button*. The *button* value gives the button no specific behavior, you would write JavaScript to give it behavior.

```html
<form>
    <label for="name">Name: </label>
    <input type="text" name="name" id="name">
    <br>

    <input type="submit">
    <input type="reset">
    <button type="reset">Another reset button</button>
</form>
```

![Select Example](/assets/img/web-design/activities/button-example.gif)

----

### Skills to Practice

- Write HTML forms to create interactive page elements
- Give unique identifiers to elements using the *id* attribute

## Activity Instructions

### Setup

This site makes use of various media assets. You will need to follow one of the steps below to set up your project.

1. Create a fork of the following Repl workspace: [Forms Starter Site](https://repl.it/@AnthonyMortimer/Web-Design-Site-7-Forms)
2. Alternatively, you can download this [zip file](/assets/files/Web-Design-Activity-1-7-Forms.zip) and set up your own workspace.

### Instructions

{% highlight html linenos %}
<html>
<head>
    <title>Forms</title>
</head>
<body>

    <h1>Survey Form</h1>

    <form>
        
        <h3>Personal Information</h3>

        <label for="name">Full Name: </label>
        <input type="text" name="name" id="name">
        <br>

        <label for="password">Password: </label>
        <input type="password" name="password" id="password">
        <br>

        <label for="bio">Biography: </label>
        <textarea name="bio" id="bio"></textarea>

        <h3>Sports</h3>

        <input type="checkbox" name="hobbies" id="hockey" value="hockey">
        <label for="hockey">hockey</label>
        <br>

        <input type="checkbox" name="hobbies" id="baseball" value="baseball">
        <label for="baseball">baseball</label>
        <br>

        <input type="checkbox" name="hobbies" id="football" value="football">
        <label for="football">football</label>
        <br>

        <input type="checkbox" name="hobbies" id="basketball" value="basketball">
        <label for="basketball">basketball</label>
        <br>

        <h3>Grade</h3>

        <input type="radio" name="grade" id="freshman" value="freshman">
        <label for="freshman">freshman</label>
        <br>

        <input type="radio" name="grade" id="sophomore" value="sophomore">
        <label for="sophomore">sophomore</label>
        <br>

        <input type="radio" name="grade" id="junior" value="junior">
        <label for="junior">junior</label>
        <br>

        <input type="radio" name="grade" id="senior" value="senior">
        <label for="senior">senior</label>
        <br>

        <h3>Favorite Team</h3>

        <select name="favorite-team" id="favorite-team">
            <option value="Cleveland Browns">Cleveland Browns</option>
            <option value="Cleveland Indians">Cleveland Indians</option>
            <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
            <option value="Cleveland Monsters">Cleveland Monsters</option>
            <option value="Pittsburgh Poopheads">Pittsburgh Poopheads</option>
        </select>
        <br>

        <h3>Submit Form</h3>

        <input type="submit" value="Submit Survey">
        <input type="reset">

    </form>

    <hr>

    <!-- This section starts out hidden. It will display when you submit the form. -->
    <!-- This is done using JavaScript. It's not mandatory, but it's nice for learning purposes. -->
    <div id="submission">
        <h2>Thanks for your submission!</h2>
        <p id="name-output">Name: </p>
        <p id="bio-output">Bio: </p>
        <p id="hobbies-output">Hobbies: </p>
        <p id="grade-output">Grade: </p>
        <p id="fav-team-output">Favorite Team: </p>
    </div>

    <!-- Links JavaScript code to the page -->
    <script src="form.js"></script>
</body>
</html>
{% endhighlight %}

### Sample Web Page

![Sample Webpage](/assets/img/web-design/activities/webpage-forms-sample.png)

## Tips, Tricks, and Reflection

- Notice that the submit button gets disabled after I click it. That's not the default behavior, I did that with JavaScript.
- There is much, much more to HTML forms than this lesson provides. Check out more course content on the site to learn how to leverage the power of form input. the JavaScript course content uses form elements to make interactive web applications.

